package com.example.proyectoG8.auth;

import com.google.common.base.Supplier;
import com.google.common.collect.ImmutableMap;
import io.jsonwebtoken.*;
import io.jsonwebtoken.impl.compression.GzipCompressionCodec;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.Map;

import static io.jsonwebtoken.SignatureAlgorithm.HS256;
import static io.jsonwebtoken.impl.TextCodec.BASE64;
import static java.util.Objects.requireNonNull;
import static lombok.AccessLevel.PRIVATE;

@Service
@Transactional
@FieldDefaults(level = PRIVATE, makeFinal = true)
public class JWTTokenService implements Clock, TokenService {
    private static final String DOT = ".";
    private static final GzipCompressionCodec COMPRESSION_CODEC = new GzipCompressionCodec();

    String issuer;
    int expirationSec;
    int clockSkewSec;
    String secretKey;

    JWTTokenService(
            @Value("${jwt.issuer}") final String issuer,
            @Value("${jwt.expiration-sec}") final int expirationSec,
            @Value("${jwt.clock-skew-sec}") final int clockSkewSec,
            @Value("${jwt.secret}") final String secret) {
        super();
        this.issuer = requireNonNull(issuer);
        this.expirationSec = requireNonNull(expirationSec);
        this.clockSkewSec = requireNonNull(clockSkewSec);
        this.secretKey = BASE64.encode(requireNonNull(secret));
    }

    private static Map<String, String> parseClaims(final Supplier<Claims> toClaims) {
        try {
            final Claims claims = toClaims.get();
            final ImmutableMap.Builder<String, String> builder = ImmutableMap.builder();
            for (final Map.Entry<String, Object> e : claims.entrySet()) {
                builder.put(e.getKey(), String.valueOf(e.getValue()));
            }
            return builder.build();
        } catch (final IllegalArgumentException | JwtException e) {
            return ImmutableMap.of();
        }
    }

    @Override
    public String permanent(final Map<String, String> attributes) {
        return newToken(attributes, 0);
    }

    @Override
    public String expiring(final Map<String, String> attributes) {
        return
                newToken(attributes, expirationSec);
    }

    private String newToken(final Map<String, String> attributes, final int expiresInSec) {


        final LocalDateTime now = LocalDateTime.now();
        final Claims claims = Jwts
                .claims()
                .setIssuer(issuer)
                .setIssuedAt(Date.from(now.atZone(ZoneId.systemDefault()).toInstant()));

        if (expiresInSec > 0) {
            final LocalDateTime expiresAt = now.plusSeconds(expiresInSec);
            claims.setExpiration(Date.from(expiresAt.atZone(ZoneId.systemDefault()).toInstant()));
        }
        claims.putAll(attributes);

        return Jwts
                .builder()
                .setClaims(claims)
                .signWith(HS256, secretKey)
                .compressWith(COMPRESSION_CODEC)
                .compact();
    }

    @Override
    public Map<String, String> verify(final String token) {
        final JwtParser parser = Jwts
                .parser()
                .requireIssuer(issuer)
                .setClock(this)
                .setAllowedClockSkewSeconds(clockSkewSec)
                .setSigningKey(secretKey);
        return parseClaims(() -> parser.parseClaimsJws(token).getBody());
    }

    @Override
    public Map<String, String> untrusted(final String token) {
        final JwtParser parser = Jwts
                .parser()
                .requireIssuer(issuer)
                .setClock(this)
                .setAllowedClockSkewSeconds(clockSkewSec);

        // See: https://github.com/jwtk/jjwt/issues/135
        final String withoutSignature = token.split(DOT)[0]+DOT;
        return parseClaims(() -> parser.parseClaimsJwt(withoutSignature).getBody());
    }

    @Override
    public Date now() {
        final LocalDateTime now = LocalDateTime.now();
        return Date.from(now.atZone(ZoneId.systemDefault()).toInstant());
    }
}

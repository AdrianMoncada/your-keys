package com.example.proyectoG8.auth;

import com.example.proyectoG8.model.User;
import lombok.AllArgsConstructor;
import lombok.NonNull;
import lombok.experimental.FieldDefaults;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.AbstractUserDetailsAuthenticationProvider;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;
import java.util.Optional;

import static lombok.AccessLevel.PACKAGE;
import static lombok.AccessLevel.PRIVATE;

@Component
@Transactional
@AllArgsConstructor(access = PACKAGE)
@FieldDefaults(level = PRIVATE, makeFinal = true)
public class TokenAuthenticationProvider extends AbstractUserDetailsAuthenticationProvider {

    @NonNull
    UserAuthenticationService auth;

    @Override
    protected void additionalAuthenticationChecks(UserDetails userDetails, UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken) throws AuthenticationException {

    }

    @Override
    protected UserDetails retrieveUser(String s, UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken) throws AuthenticationException {
        final Object token = usernamePasswordAuthenticationToken.getCredentials();
        return Optional
                .ofNullable(token)
                .map(String::valueOf)
                .flatMap(auth::findByToken)
                .orElseThrow();
    }
}

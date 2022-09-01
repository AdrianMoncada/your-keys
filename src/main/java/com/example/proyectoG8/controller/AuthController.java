package com.example.proyectoG8.controller;

import com.example.proyectoG8.model.dto.UserAuthDTO;
import com.example.proyectoG8.model.dto.UserDTO;
import com.example.proyectoG8.service.IUserService;
import com.example.proyectoG8.utils.JWTUtil;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private IUserService userService;

    @Autowired
    private JWTUtil jwtUtil;

    @Autowired
    private ModelMapper mapper;

    @PostMapping("/login")
    public ResponseEntity<UserAuthDTO> verifyUser(@RequestBody UserDTO userDTO){

        UserDTO userFound = userService.verifyCredentials(userDTO);

        if (userFound == null){
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }

        String tokenJwt = jwtUtil.create(String.valueOf(userFound.getIdUser()), userFound.getEmail());

        UserAuthDTO userAuthDTO = mapper.map(userFound, UserAuthDTO.class);
        userAuthDTO.setToken(tokenJwt);

        return new ResponseEntity(userAuthDTO, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<UserAuthDTO> addUser(@RequestBody UserDTO userDTO) {

        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        String hash = argon2.hash(1,1024, 1, userDTO.getPassword());
        userDTO.setPassword(hash);

        String tokenJwt = jwtUtil.create(String.valueOf(userDTO.getIdUser()), userDTO.getEmail());

        UserAuthDTO userAuthDTO = mapper.map(userDTO, UserAuthDTO.class);
        userAuthDTO.setToken(tokenJwt);

        if(userService.createUser(userDTO) != null){
            return new ResponseEntity(userAuthDTO, HttpStatus.CREATED);
        }
        return new ResponseEntity(HttpStatus.CONFLICT);

    }
}

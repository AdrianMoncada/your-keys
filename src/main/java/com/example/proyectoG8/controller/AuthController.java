package com.example.proyectoG8.controller;

import com.example.proyectoG8.auth.UserAuthenticationService;
import com.example.proyectoG8.model.dto.UserAuthDTO;
import com.example.proyectoG8.model.dto.UserDTO;
import com.example.proyectoG8.service.IUserService;
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
    private UserAuthenticationService authenticationService;

    @Autowired
    private ModelMapper mapper;

    @PostMapping("/login")
    public ResponseEntity<UserAuthDTO> verifyUser(@RequestBody UserDTO userDTO){
        return new ResponseEntity(authenticationService.login(userDTO, false), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<UserAuthDTO> addUser(@RequestBody UserDTO userDTO) {

        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        String hash = argon2.hash(1,1024, 1, userDTO.getPassword());
        userDTO.setPassword(hash);

        UserDTO userCreated = userService.createUser(userDTO);
        if( userCreated != null){
            return new ResponseEntity(authenticationService.login(userCreated, true), HttpStatus.CREATED);
        }
        return new ResponseEntity(HttpStatus.CONFLICT);

    }
}

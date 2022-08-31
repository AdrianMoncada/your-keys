package com.example.proyectoG8.controller;


import com.example.proyectoG8.model.dto.UserDTO;
import com.example.proyectoG8.service.IUserService;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private IUserService userService;

    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> searchUser(@PathVariable Long id) {
        if (userService.readUser(id) != null) {
            return new ResponseEntity(userService.readUser(id), HttpStatus.OK);
        }
        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/login")
    public ResponseEntity<UserDTO> verifyUser(@RequestBody UserDTO userDTO){

        UserDTO userFound = userService.verifyCredentials(userDTO);

        if (userFound == null){
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(userService.verifyCredentials(userDTO), HttpStatus.OK);

    }

    @PostMapping
    public ResponseEntity<UserDTO> addUser(@RequestBody UserDTO userDTO) {

        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);

        String hash = argon2.hash(1,1024, 1, userDTO.getPassword());

        userDTO.setPassword(hash);

        return new ResponseEntity(userService.createUser(userDTO), HttpStatus.CREATED);
    }


    @PutMapping
    public ResponseEntity<UserDTO> updateUser(@RequestBody UserDTO userDTO) {
        if (userService.readUser(userDTO.getIdUser()) != null) {
            return new ResponseEntity(userService.updateUser(userDTO), HttpStatus.OK);
        }

        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<UserDTO> deleteUser(@PathVariable Long id) {
        if (userService.readUser(id) != null) {
            userService.deleteUser(id);
            return new ResponseEntity(HttpStatus.OK);
        }
        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }

    @GetMapping
    public ResponseEntity<List<UserDTO>> searchAllUsers() {
        return new ResponseEntity(userService.listUser(), HttpStatus.OK);
    }


}

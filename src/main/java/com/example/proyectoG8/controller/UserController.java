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

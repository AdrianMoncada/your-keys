package com.example.proyectoG8.service;

import com.example.proyectoG8.model.dto.UserDTO;

import java.util.List;

public interface IUserService {

    public UserDTO createUser(UserDTO userDTO);

    public UserDTO readUser(Long id);

    public UserDTO updateUser(UserDTO userDTO);

    public void deleteUser(Long id);

    public List<UserDTO> listUser();

    public UserDTO verifyCredentials(UserDTO userDTO);
}

package com.example.proyectoG8.model.dto;


import com.example.proyectoG8.model.Rol;
import lombok.*;

import java.io.Serializable;
import java.util.List;

@Getter
@Setter
public class UserDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long idUser;

    private String userName;

    private String userLastName;

    private String email;

    private String password;

    private String city;

    private RolDTO rol;

}

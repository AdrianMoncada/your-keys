package com.example.proyectoG8.model.dto;


import lombok.*;

import java.io.Serializable;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long idUser;

    private String name;

    private String userLastName;

    private String email;

    private String password;

    private String city;

    private RolDTO rol;

}

package com.example.proyectoG8.model.dto;

import lombok.*;

import java.io.Serializable;

@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserAuthDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long idUser;

    private String name;

    private String userLastName;

    private String email;

    private RolDTO rol;

    private String token;
}

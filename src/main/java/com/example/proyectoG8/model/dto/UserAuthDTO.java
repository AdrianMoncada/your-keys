package com.example.proyectoG8.model.dto;

import com.example.proyectoG8.model.Booking;
import com.example.proyectoG8.model.Rol;
import lombok.*;

import java.io.Serializable;
import java.util.List;

@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserAuthDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long idUser;

    private String userName;

    private String userLastName;

    private String email;

    private RolDTO rol;

    private String token;
}

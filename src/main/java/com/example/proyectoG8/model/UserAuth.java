package com.example.proyectoG8.model;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
public class UserAuth {

    private Long idUser;

    private String name;

    private String userLastName;

    private String email;

    private Rol rol;

    private List<Booking> bookings;

    private String token;
}

package com.example.proyectoG8.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Setter
@Getter
public class UserAuth {

    private Long idUser;

    private String userName;

    private String userLastName;

    private String email;

    private Rol rol;

    private List<Booking> bookings;

    private String token;
}

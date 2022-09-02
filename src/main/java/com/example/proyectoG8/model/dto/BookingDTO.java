package com.example.proyectoG8.model.dto;

import com.example.proyectoG8.model.User;
import com.example.proyectoG8.model.Vehicle;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.sql.Date;
import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
public class BookingDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long bookingId;

    private LocalTime time;

    private LocalDate initialdate;

    private LocalDate finalDate;

    private VehicleDTO vehicle;

    private UserDTO user;


}

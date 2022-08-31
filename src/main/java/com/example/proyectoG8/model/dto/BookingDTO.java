package com.example.proyectoG8.model.dto;

import com.example.proyectoG8.model.User;
import com.example.proyectoG8.model.Vehicle;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.sql.Date;
import java.sql.Time;

@Getter
@Setter
public class BookingDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long bookingId;

    private Time time;

    private Date initialdate;

    private Date finalDate;

    private VehicleDTO vehicle;

    private UserDTO user;


}

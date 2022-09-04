package com.example.proyectoG8.model;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class BookingFilter {

    private LocalDate initialDate;
    private LocalDate finalDate;
    private Long cityId;
}

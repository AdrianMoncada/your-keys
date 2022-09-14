package com.example.proyectoG8.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Getter
@Setter
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingId;

    @Column
    private LocalTime time;

    @Column
    private LocalDate initialdate;

    @Column
    private LocalDate finalDate;

    @JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handler"}, allowSetters = true)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "vehicle_id")
    private Vehicle vehicle;

    @JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handler"}, allowSetters = true)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;


}

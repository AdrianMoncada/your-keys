package com.example.proyectoG8.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "users")
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUser;

    @Column
    private String userName;

    @Column
    private String userLastName;

    @Column
    private String email;

    @Column
    private String password;

    @Column
    private String city;

    @JsonManagedReference
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handler"}, allowSetters = true)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "rol_id")
    private Rol rol;

    @JsonManagedReference
    @JsonIgnoreProperties({"handler", "hibernateLazyInitializer"})
    @OneToMany
    private List<Booking> bookings;
}

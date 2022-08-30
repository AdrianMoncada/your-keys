package com.example.proyectoG8.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "roles")
@Getter
@Setter
public class Rol {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idRol;

    @Column
    private String name;

    @JsonManagedReference
    @JsonIgnoreProperties({"handler", "hibernateLazyInitializer"})
    @OneToMany
    private List<User> users;
}

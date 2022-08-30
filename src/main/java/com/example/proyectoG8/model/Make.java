package com.example.proyectoG8.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "makes")
@Getter
@Setter
public class Make {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idMake;

    @Column
    private String name;

    @JsonBackReference
    //@JsonManagedReference
    @JsonIgnoreProperties({"handler", "hibernateLazyInitializer"})
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "make")
    private List<Vehicle> vehicles;

}

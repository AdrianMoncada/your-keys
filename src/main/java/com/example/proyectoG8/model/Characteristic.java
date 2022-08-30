package com.example.proyectoG8.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "characteristics")
@Getter
@Setter
public class Characteristic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCharacteristic;

    @Column
    private String nameCharacteristic;

    @Column
    private String value;

    @Column
    private String icon;


    @JsonBackReference
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handle"}, allowSetters = true)
    @ManyToMany(mappedBy = "characteristics", fetch = FetchType.LAZY)
    private List<Vehicle> vehicles;

}

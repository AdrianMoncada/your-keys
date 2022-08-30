package com.example.proyectoG8.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "cities")
@Getter
@Setter
public class City {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCity;

    @Column
    private String cityName;

    @Column
    private String provinceName;

    @Column
    private String countryName;

    @JsonBackReference
    @JsonIgnoreProperties({"handler", "hibernateLazyInitializer"})
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "city")
    private List<Vehicle> vehicles;

}

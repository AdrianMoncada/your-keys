package com.example.proyectoG8.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Getter
@Setter
@Table(name = "vehicles")
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idVehicle;

    @JsonManagedReference
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handler"}, allowSetters = true)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "make_id")
    private Make make;

    @Column
    private String rangeName;

    @Column(length = 500)
    private String description;

    @Column
    private Double price;

    @Column
    private Double latitude;

    @Column
    private Double longitude;

    @JsonManagedReference
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handler"}, allowSetters = true)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "model_id")
    private Model model;

    @JsonManagedReference
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handler"}, allowSetters = true)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "city_id")
    private City city;

    @JsonManagedReference
    @JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handler"}, allowSetters = true)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "categories_id")
    private Category category;

    @JsonManagedReference
    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinTable(name = "vehicle_characteristic", joinColumns = @JoinColumn(name = "vehicle_id"),
            inverseJoinColumns = @JoinColumn(name = "characteristic_id"), uniqueConstraints = {
            @UniqueConstraint(columnNames = {"vehicle_id", "characteristic_id"})})
    private List<Characteristic> characteristics;

    @JsonManagedReference
    @JsonIgnoreProperties({"handler", "hibernateLazyInitializer"})
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.MERGE, mappedBy = "vehicle")
    private List<Image> images = new ArrayList<>();

    @JsonManagedReference
    @JsonIgnoreProperties({"handler", "hibernateLazyInitializer"})
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.MERGE, mappedBy = "vehicle")
    private List<Score> scores = new ArrayList<>();

}

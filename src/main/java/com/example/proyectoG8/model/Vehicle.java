package com.example.proyectoG8.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name = "vehicles")
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "makes_id")
    private Make make;

    @Column
    private String name  ;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "models_id", nullable = false)
    private Model model;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "cities_id", nullable = false)
    private City city;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "categories_id", nullable = false)
    private Category category;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name = "vehicle_characteristics", joinColumns = @JoinColumn(name = "vehicles_id"),
            inverseJoinColumns = @JoinColumn(name = "characteristics_id") )
    @JsonIgnore
    private List<Characteristic> characteristics;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "images_id")
    private List<Image> images;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Make getMake() {
        return make;
    }

    public void setMake(Make make) {
        this.make = make;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Model getModel() {
        return model;
    }

    public void setModel(Model model) {
        this.model = model;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public List<Characteristic> getCharacteristics() {
        return characteristics;
    }

    public void setCharacteristics(List<Characteristic> characteristics) {
        this.characteristics = characteristics;
    }

    public List<Image> getImages() {
        return images;
    }

    public void setImages(List<Image> images) {
        this.images = images;
    }
}

package com.example.proyectoG8.model;

import org.hibernate.annotations.Immutable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Immutable
@org.springframework.data.annotation.Immutable
public class NuevoModel {

    @Id
    @Column(name = "name")
    private String name;

}

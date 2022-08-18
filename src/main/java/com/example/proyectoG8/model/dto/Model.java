package com.example.proyectoG8.model.dto;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;



public class Model {


    private Long id;


    private String year;


    private List<VehicleDTO> vehicleDTOS;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public List<VehicleDTO> getVehicles() {
        return vehicleDTOS;
    }

    public void setVehicles(List<VehicleDTO> vehicleDTOS) {
        this.vehicleDTOS = vehicleDTOS;
    }
}

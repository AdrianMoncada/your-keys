package com.example.proyectoG8.model.dto;

import java.util.List;



public class ModelDTO {


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

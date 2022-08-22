package com.example.proyectoG8.model.dto;

import java.util.List;


public class MakeDTO {


    private Long id;


    private String name;

    private List<VehicleDTO> vehicleDTOS;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<VehicleDTO> getVehicles() {
        return vehicleDTOS;
    }

    public void setVehicles(List<VehicleDTO> vehicleDTOS) {
        this.vehicleDTOS = vehicleDTOS;
    }
}

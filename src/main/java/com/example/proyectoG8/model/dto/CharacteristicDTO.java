package com.example.proyectoG8.model.dto;

import java.util.List;


public class CharacteristicDTO {


    private Long id;


    private String name;


    private String icon;


    private List<VehicleDTO> vehicleDTOS;

    public List<VehicleDTO> getVehicles() {
        return vehicleDTOS;
    }

    public void setVehicles(List<VehicleDTO> vehicleDTOS) {
        this.vehicleDTOS = vehicleDTOS;
    }

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

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }
}

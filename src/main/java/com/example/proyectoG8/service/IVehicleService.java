package com.example.proyectoG8.service;

import com.example.proyectoG8.model.dto.VehicleDTO;

import java.util.List;

public interface IVehicleService {

    public VehicleDTO createVehicle(VehicleDTO vehicleDTO);

    public VehicleDTO readVehicle(Long id);

    public VehicleDTO updateVehicle(VehicleDTO vehicleDTO);

    public void deleteVehicle(Long id);

    public List<VehicleDTO> listVehicle();

    public List<VehicleDTO> listVehicleByCity(Long cityId);
}

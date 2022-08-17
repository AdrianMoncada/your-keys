package com.example.proyectoG8.service;

import com.example.proyectoG8.model.Vehicle;

import java.util.List;

public interface IVehicleService {

    public Vehicle createVehicle(Vehicle vehicle);

    public Vehicle readVehicle(Long id);

    public Vehicle updateVehicle(Vehicle vehicle);

    public void deleteVehicle(Long id);

    public List<Vehicle> listVehicle();

    public List<Vehicle> listVehicleByCity(Long cityId);
}

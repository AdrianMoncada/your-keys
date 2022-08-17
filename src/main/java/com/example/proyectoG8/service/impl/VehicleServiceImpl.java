package com.example.proyectoG8.service.impl;

import com.example.proyectoG8.model.Vehicle;
import com.example.proyectoG8.repository.IVehicleRepository;
import com.example.proyectoG8.service.IVehicleService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

public class VehicleServiceImpl implements IVehicleService {

    @Autowired
    IVehicleRepository vehicleRepository;

    @Override
    public Vehicle createVehicle(Vehicle vehicle) {
        return vehicleRepository.save(vehicle);
    }

    @Override
    public Vehicle readVehicle(Long id) {
        Vehicle vehicle = null;
        if (vehicleRepository.findById(id).isPresent()){
            vehicle = vehicleRepository.findById(id).get();
        }
        return vehicle;
    }

    @Override
    public Vehicle updateVehicle(Vehicle vehicle) {
        return vehicleRepository.save(vehicle);
    }

    @Override
    public void deleteVehicle(Long id) {
        vehicleRepository.deleteById(id);
    }

    @Override
    public List<Vehicle> listVehicle() {
        return vehicleRepository.findAll();
    }

    @Override
    public List<Vehicle> listVehicleByCity(Long cityId) {

        List<Vehicle> vehicles = vehicleRepository.findAll();
        List<Vehicle> vehiclesByCity = new ArrayList<>();

        for (Vehicle vehicle : vehicles) {
            if (vehicle.getCity().getId() == cityId){
                vehiclesByCity.add(vehicle);
            }
        }
        return vehiclesByCity;
    }
}

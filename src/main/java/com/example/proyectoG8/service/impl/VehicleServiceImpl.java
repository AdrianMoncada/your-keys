package com.example.proyectoG8.service.impl;

import com.example.proyectoG8.model.Vehicle;
import com.example.proyectoG8.model.dto.VehicleDTO;
import com.example.proyectoG8.repository.IVehicleRepository;
import com.example.proyectoG8.service.IVehicleService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class VehicleServiceImpl implements IVehicleService {

    @Autowired
    private IVehicleRepository vehicleRepository;

    @Autowired
    private ModelMapper mapper;


    @Override
    public VehicleDTO createVehicle(VehicleDTO vehicleDTO) {
        Vehicle vehicle = vehicleRepository.save(mapper.map(vehicleDTO, Vehicle.class));
        return mapper.map(vehicle, VehicleDTO.class);
    }

    @Override
    public VehicleDTO readVehicle(Long id) {
        Optional<Vehicle> vehicle = vehicleRepository.findById(id);
        VehicleDTO vehicleDTO = null;
        if (vehicle.isPresent())
            vehicleDTO = mapper.map(vehicle.get(), VehicleDTO.class);
        return vehicleDTO;
    }

    @Override
    public VehicleDTO updateVehicle(VehicleDTO vehicleDTO) {
        Vehicle vehicle = vehicleRepository.save(mapper.map(vehicleDTO, Vehicle.class));
        return mapper.map(vehicle, VehicleDTO.class);
    }

    @Override
    public void deleteVehicle(Long id) {
        vehicleRepository.deleteById(id);
    }

    @Override
    public List<VehicleDTO> listVehicle() {
        List<Vehicle> vehicles = vehicleRepository.findAll();
        List<VehicleDTO> vehicleDTOS = new ArrayList<>();
        for (Vehicle vehicle : vehicles) {
            vehicleDTOS.add(mapper.map(vehicle, VehicleDTO.class));
        }
        return vehicleDTOS;
    }


    @Override
    public List<VehicleDTO> listVehicleByCity(Long cityId) {

        List<Vehicle> vehicles = vehicleRepository.findAll();
        List<Vehicle> vehiclesByCity = new ArrayList<>();

        for (Vehicle vehicle : vehicles) {
            if (vehicle.getCity().getId() == cityId) {
                vehiclesByCity.add(vehicle);
            }
        }

        List<VehicleDTO> vehicleDTOS = new ArrayList<>();

        for (Vehicle vehicle : vehiclesByCity) {
            vehicleDTOS.add(mapper.map(vehicle, VehicleDTO.class));
        }
        return vehicleDTOS;
    }
}

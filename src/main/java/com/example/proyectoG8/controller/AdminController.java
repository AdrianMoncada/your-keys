package com.example.proyectoG8.controller;

import com.example.proyectoG8.model.dto.VehicleDTO;
import com.example.proyectoG8.service.IVehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private IVehicleService vehicleService;

    @PostMapping
    public ResponseEntity<VehicleDTO> addVehicle(@RequestBody VehicleDTO vehicleDTO) {
        return new ResponseEntity(vehicleService.createVehicle(vehicleDTO), HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<VehicleDTO> updateVehicle(@RequestBody VehicleDTO vehicleDTO) {
        VehicleDTO vehicleFound = vehicleService.readVehicle(vehicleDTO.getIdVehicle());
        if ( vehicleFound != null) {
            return new ResponseEntity(vehicleService.updateVehicle(vehicleDTO), HttpStatus.OK);
        }

        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<VehicleDTO> deleteVehicle(@PathVariable Long id) {
        if (vehicleService.readVehicle(id) != null) {
            vehicleService.deleteVehicle(id);
            return new ResponseEntity(HttpStatus.OK);
        }
        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }


}

package com.example.proyectoG8.controller;


import com.example.proyectoG8.model.dto.VehicleDTO;
import com.example.proyectoG8.service.IVehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vehicle")
public class VehicleController {

    @Autowired
    private IVehicleService vehicleService;

    @GetMapping("/{id}")
    public ResponseEntity<?> searchVehicle(@PathVariable Long id) {
        if (vehicleService.readVehicle(id) != null) {

            return new ResponseEntity(vehicleService.readVehicle(id), HttpStatus.OK);
        }

        return new ResponseEntity(HttpStatus.NOT_FOUND);

    }

    @PostMapping
    public ResponseEntity<VehicleDTO> addVehicle(@RequestBody VehicleDTO vehicleDTO) {
        return new ResponseEntity(vehicleService.createVehicle(vehicleDTO), HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<VehicleDTO> updateVehicle(@RequestBody VehicleDTO vehicleDTO) {
        if (vehicleService.readVehicle(vehicleDTO.getIdVehicle()) != null) {
            return new ResponseEntity(vehicleService.updateVehicle(vehicleDTO), HttpStatus.OK);
        }

        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<VehicleDTO> deleteCategory(@PathVariable Long id) {
        if (vehicleService.readVehicle(id) != null) {
            vehicleService.deleteVehicle(id);
            return new ResponseEntity(HttpStatus.OK);
        }
        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }

    @GetMapping
    public ResponseEntity<List<VehicleDTO>> searchAllVehicles() {
        return new ResponseEntity(vehicleService.listVehicle(), HttpStatus.OK);
    }

    @GetMapping("/city/{id}")
    public ResponseEntity<List<VehicleDTO>> searchAllVehiclesByCity(@PathVariable Long id) {
        return new ResponseEntity(vehicleService.listVehicleByCity(id), HttpStatus.OK);
    }

    @GetMapping("/category/{id}")
    public ResponseEntity<List<VehicleDTO>> searchAllVehiclesByCategory(@PathVariable Long id) {
        return new ResponseEntity(vehicleService.listVehicleByCategory(id), HttpStatus.OK);
    }
}

package com.example.proyectoG8.controller;


import com.example.proyectoG8.model.Vehicle;
import com.example.proyectoG8.service.IVehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/vehicle")
public class VehicleController {

    @Autowired
    private IVehicleService vehicleService;

    @GetMapping("/{id}")
    public ResponseEntity<?> searchVehicle(@PathVariable Long id){
        if (vehicleService.readVehicle(id) != null){

            return new ResponseEntity(vehicleService.readVehicle(id), HttpStatus.FOUND);
        }

        return new ResponseEntity(HttpStatus.NOT_FOUND);

    }

    @PostMapping
    public ResponseEntity<?> addVehicle(@RequestBody Vehicle vehicle){

        return new ResponseEntity(vehicleService.createVehicle(vehicle), HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<?> updateVehicle(@RequestBody Vehicle vehicle){
        if (vehicleService.readVehicle(vehicle.getId()) != null){
            return new ResponseEntity(vehicleService.updateVehicle(vehicle), HttpStatus.OK);
        }

        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable Long id){
        if(vehicleService.readVehicle(id) != null){
            vehicleService.deleteVehicle(id);
            return new ResponseEntity(HttpStatus.OK);
        }
        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }

    @GetMapping
    public ResponseEntity<?> searchAllVehicles(){
        return new ResponseEntity(vehicleService.listVehicle(),HttpStatus.OK);
    }

    @GetMapping("/city/{id}")
    public ResponseEntity<?> searchAlVehiclesByCity(@PathVariable Long id){
        return new ResponseEntity(vehicleService.listVehicleByCity(id),HttpStatus.OK);
    }
}

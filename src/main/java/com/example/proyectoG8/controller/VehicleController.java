package com.example.proyectoG8.controller;


import com.example.proyectoG8.model.Booking;
import com.example.proyectoG8.model.BookingFilter;
import com.example.proyectoG8.model.dto.BookingDTO;
import com.example.proyectoG8.model.dto.VehicleDTO;
import com.example.proyectoG8.service.IBookingService;
import com.example.proyectoG8.service.IVehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/vehicle")
public class VehicleController {

    @Autowired
    private IVehicleService vehicleService;

    @Autowired
    private IBookingService bookingService;

    @GetMapping("/{id}")
    public ResponseEntity<?> searchVehicle(@PathVariable Long id) {
        if (vehicleService.readVehicle(id) != null) {

            return new ResponseEntity(vehicleService.readVehicle(id), HttpStatus.OK);
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

    @PostMapping("/booking")
    public ResponseEntity<List<VehicleDTO>> listVehicleByCityOrDateOrBoth(@RequestBody BookingFilter bookingFilter){
        return new ResponseEntity(vehicleService.listVehicleByCityOrDateOrBoth(bookingFilter),HttpStatus.OK);
    }

    @GetMapping("/booking/{id}")
    public ResponseEntity<List<BookingDTO>> searchAllBookings(@PathVariable Long id){
        List<BookingDTO> bookingDTOS = bookingService.listBooking();
        List<BookingDTO> bookingsFilter = new ArrayList<>();
        for (BookingDTO bookingDTO : bookingDTOS) {
            if(bookingDTO.getVehicle().getIdVehicle()==id)
            bookingsFilter.add(bookingDTO);
        }
        return new ResponseEntity(bookingsFilter, HttpStatus.OK);
    }
}

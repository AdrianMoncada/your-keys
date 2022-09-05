package com.example.proyectoG8.controller;

import com.example.proyectoG8.model.dto.BookingDTO;
import com.example.proyectoG8.service.IBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/booking")
public class BookingController {
    @Autowired
    private IBookingService bookingService;

    @GetMapping("/{id}")
    public ResponseEntity<BookingDTO> searchBooking(@PathVariable
    Long id ){
        if(bookingService.readBooking(id) != null){
            return new ResponseEntity(bookingService.readBooking(id), HttpStatus.OK);
        }
        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public ResponseEntity<BookingDTO> createBooking(@RequestBody BookingDTO bookingDTO){
        bookingDTO = bookingService.createBooking(bookingDTO);
        return new ResponseEntity(bookingDTO, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<BookingDTO> updateBooking(@RequestBody BookingDTO bookingDTO){
        if(bookingDTO.getBookingId() == null || bookingDTO.getUser().getIdUser() == null ||
        bookingDTO.getVehicle().getIdVehicle() == null || bookingDTO.getInitialdate() == null ||
        bookingDTO.getFinalDate() == null || bookingDTO.getInitialdate() == null){
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity(bookingService.createBooking(bookingDTO), HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<BookingDTO> deleteBooking(@PathVariable Long id){
        if (bookingService.readBooking(id) != null){
            bookingService.deleteBooking(id);
            return new ResponseEntity(HttpStatus.OK);
        }
        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }

    @GetMapping
    public ResponseEntity<List<BookingDTO>> searchAllBookings(){
        return new ResponseEntity(bookingService.listBooking(), HttpStatus.OK);
    }


}

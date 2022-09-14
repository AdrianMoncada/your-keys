package com.example.proyectoG8.service;

import com.example.proyectoG8.model.dto.BookingDTO;
import org.springframework.stereotype.Service;

import java.util.List;


public interface IBookingService {

    public BookingDTO createBooking(BookingDTO bookingDTO);

    public BookingDTO readBooking(Long id);

    public BookingDTO updateBooking(BookingDTO bookingDTO);

    public void deleteBooking(Long id);

    public List<BookingDTO> listBooking();

    public List<BookingDTO> readByUserId(Long userId);

}

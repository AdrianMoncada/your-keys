package com.example.proyectoG8.service.impl;

import com.example.proyectoG8.model.Booking;
import com.example.proyectoG8.model.User;
import com.example.proyectoG8.model.Vehicle;
import com.example.proyectoG8.model.dto.BookingDTO;
import com.example.proyectoG8.repository.IBookingRepository;
import com.example.proyectoG8.repository.IUserRepository;
import com.example.proyectoG8.repository.IVehicleRepository;
import com.example.proyectoG8.service.IBookingService;
import com.example.proyectoG8.service.IEmailSenderService;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class BookingServiceImpl implements IBookingService {

    private final static Logger logger = LoggerFactory.getLogger(BookingServiceImpl.class);

    @Autowired
    IBookingRepository bookingRepository;

    @Autowired
    IVehicleRepository vehicleRepository;

    @Autowired
    IUserRepository userRepository;

    @Autowired
    private IEmailSenderService emailSender;

    @Autowired
    ModelMapper mapper;

    @Override
    public BookingDTO createBooking(BookingDTO bookingDTO) {
        Optional<User> user = userRepository.findById(bookingDTO.getUser().getIdUser());
        Optional<Vehicle> vehicle = vehicleRepository.findById((bookingDTO.getVehicle().getIdVehicle()));
        Booking booking1 = mapper.map(bookingDTO, Booking.class);
        booking1.setUser(user.get());
        booking1.setVehicle(vehicle.get());

        Booking booking = bookingRepository.save(booking1);
        emailSender.sendEmail(booking.getUser().getEmail(), "Confirmación de su reserva",
                "La reserva solicitada para el vehículo "+ booking.getVehicle().getRangeName() +
                " para la fecha: "+ booking.getInitialdate()+ " ha sido registrada con éxito.");
        return mapper.map(booking, BookingDTO.class);
    }

    @Override
    public BookingDTO readBooking(Long id) {
        Optional<Booking> booking = bookingRepository.findById(id);
        BookingDTO bookingDTO = null;
        if (booking.isPresent())
            bookingDTO = mapper.map(booking.get(), BookingDTO.class);
        return bookingDTO;
    }

    @Override
    public BookingDTO updateBooking(BookingDTO bookingDTO) {
        Booking booking = bookingRepository.save(mapper.map(bookingDTO, Booking.class));
        return mapper.map(booking, BookingDTO.class);
    }

    @Override
    public void deleteBooking(Long id) {
        bookingRepository.deleteById(id);
    }

    @Override
    public List<BookingDTO> listBooking() {
        List<Booking> bookings = bookingRepository.findAll();
        List<BookingDTO> bookingDTOS = new ArrayList<>();

        for (Booking booking : bookings) {
            bookingDTOS.add(mapper.map(booking, BookingDTO.class));
        }
        return bookingDTOS;
    }

    @Override
    public List<BookingDTO> readByUserId(Long userId) {
        if (userRepository.findById(userId) != null){

            List<Booking> bookings = bookingRepository.findByUserId(userId);
            List<BookingDTO> bookingDTOS = new ArrayList<>();

            for (Booking booking : bookings) {
                bookingDTOS.add(mapper.map(booking, BookingDTO.class));
            }
            return bookingDTOS;
        }
        return null;
    }
}

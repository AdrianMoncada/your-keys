package com.example.proyectoG8.service;

import com.example.proyectoG8.model.BookingFilter;
import com.example.proyectoG8.model.dto.VehicleDTO;

import java.time.LocalDate;
import java.util.List;

public interface IVehicleService {

    public VehicleDTO createVehicle(VehicleDTO vehicleDTO);

    public VehicleDTO readVehicle(Long id);

    public VehicleDTO updateVehicle(VehicleDTO vehicleDTO);

    public void deleteVehicle(Long id);

    public List<VehicleDTO> listVehicle();

    public List<VehicleDTO> listVehicleByCity(Long cityId);

    public List<VehicleDTO> listVehicleByCategory(Long categoryId);

    public List<VehicleDTO> listVehicleByCityAndDate(BookingFilter bookingFilter);

    public List<VehicleDTO> listVehicleByDate(BookingFilter bookingFilter);

    public List<VehicleDTO> listVehicleByCityOrDateOrBoth(BookingFilter bookingFilter);
}

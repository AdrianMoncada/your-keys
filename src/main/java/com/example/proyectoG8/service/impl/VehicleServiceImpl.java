package com.example.proyectoG8.service.impl;

import com.example.proyectoG8.model.BookingFilter;
import com.example.proyectoG8.model.Image;
import com.example.proyectoG8.model.Vehicle;
import com.example.proyectoG8.model.dto.ImageDTO;
import com.example.proyectoG8.model.dto.VehicleDTO;
import com.example.proyectoG8.repository.IVehicleRepository;
import com.example.proyectoG8.repository.IimageRepository;
import com.example.proyectoG8.service.IVehicleService;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class VehicleServiceImpl implements IVehicleService {

    private final static Logger logger = LoggerFactory.getLogger(VehicleServiceImpl.class);

    @Autowired
    private IVehicleRepository vehicleRepository;

    @Autowired
    private IimageRepository imageRepository;

    @Autowired
    private ModelMapper mapper;


    @Override
    public VehicleDTO createVehicle(VehicleDTO vehicleDTO) {
        List<ImageDTO> imagesDTO = vehicleDTO.getImages();
        vehicleDTO.setImages(null);
        Vehicle vehicle = vehicleRepository.save(mapper.map(vehicleDTO, Vehicle.class));
        for (ImageDTO imageDTO : imagesDTO) {
            Image image = mapper.map(imageDTO, Image.class);
            image.setVehicle(vehicle);
            Image imageSaved = imageRepository.save(image);
        }
        Optional<Vehicle> vehicleFound = vehicleRepository.findById(vehicle.getIdVehicle());
        return mapper.map(vehicleFound.get(), VehicleDTO.class);
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
            if (vehicle.getCity().getIdCity() == cityId) {
                vehiclesByCity.add(vehicle);
            }
        }

        List<VehicleDTO> vehicleDTOS = new ArrayList<>();

        for (Vehicle vehicle : vehiclesByCity) {
            vehicleDTOS.add(mapper.map(vehicle, VehicleDTO.class));
        }
        return vehicleDTOS;
    }

    @Override
    public List<VehicleDTO> listVehicleByCategory(Long categoryId) {
        List<Vehicle> vehicles = vehicleRepository.findAll();
        List<Vehicle> vehiclesByCategory = new ArrayList<>();

        for (Vehicle vehicle : vehicles) {
            if (vehicle.getCategory().getId_category() == categoryId) {
                vehiclesByCategory.add(vehicle);
            }
        }

        List<VehicleDTO> vehicleDTOS = new ArrayList<>();

        for (Vehicle vehicle : vehiclesByCategory) {
            vehicleDTOS.add(mapper.map(vehicle, VehicleDTO.class));
        }
        return vehicleDTOS;
    }

    @Override
    public List<VehicleDTO> listVehicleByCityAndDate(BookingFilter bookingFilter) {
        List<VehicleDTO> vehicleDTOS= new ArrayList<>();
        if (bookingFilter.getInitialDate().isAfter(bookingFilter.getFinalDate())){
            logger.error("Error in data");
            return null;
        }

        List<Vehicle> vehicles =vehicleRepository.findByDateAndCity(bookingFilter.getInitialDate(),
                bookingFilter.getFinalDate(), bookingFilter.getCityId());

        for (Vehicle vehicle : vehicles) {
            vehicleDTOS.add(mapper.map(vehicle, VehicleDTO.class));
        }

        return vehicleDTOS;
    }

    @Override
    public List<VehicleDTO> listVehicleByDate(BookingFilter bookingFilter) {
        List<VehicleDTO> vehicleDTOS= new ArrayList<>();
        if (bookingFilter.getInitialDate().isAfter(bookingFilter.getFinalDate())){
            logger.error("Error in data");
            return null;
        }
        List<Vehicle> vehicles =vehicleRepository.findByDate(bookingFilter.getInitialDate(), bookingFilter.getFinalDate());

        for (Vehicle vehicle : vehicles) {
            vehicleDTOS.add(mapper.map(vehicle, VehicleDTO.class));
        }

        return vehicleDTOS;
    }

    @Override
    public List<VehicleDTO> listVehicleByCityOrDateOrBoth(BookingFilter bookingFilter) {
        if (bookingFilter.getCityId()!=null && bookingFilter.getInitialDate()==null){
            return this.listVehicleByCity(bookingFilter.getCityId());
        }
        if (bookingFilter.getInitialDate()!=null && bookingFilter.getCityId()==null){
            return this.listVehicleByDate(bookingFilter);
        }
        if( bookingFilter.getCityId()!=null && bookingFilter.getInitialDate()!=null){
            return this.listVehicleByCityAndDate(bookingFilter);
        }else return this.listVehicle();
    }
}

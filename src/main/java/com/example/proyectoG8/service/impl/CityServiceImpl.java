package com.example.proyectoG8.service.impl;

import com.example.proyectoG8.model.City;
import com.example.proyectoG8.model.dto.CityDTO;
import com.example.proyectoG8.repository.ICityRepository;
import com.example.proyectoG8.service.ICityService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CityServiceImpl implements ICityService {

    @Autowired
    private ICityRepository iCityRepository;

    @Autowired
    private ModelMapper mapper;

    @Override
    public List<CityDTO> listAllCities() {
        List<City> cities = iCityRepository.findAll();
        List<CityDTO> cityDTOS = new ArrayList<>();

        for (City city : cities) {
            cityDTOS.add(mapper.map(city, CityDTO.class));
        }
        return cityDTOS;
    }
}

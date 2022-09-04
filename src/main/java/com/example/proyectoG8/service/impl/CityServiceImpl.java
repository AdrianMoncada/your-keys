package com.example.proyectoG8.service.impl;

import com.example.proyectoG8.model.City;
import com.example.proyectoG8.model.dto.CityDTO;
import com.example.proyectoG8.repository.ICityRepository;
import com.example.proyectoG8.service.ICityService;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CityServiceImpl implements ICityService {

    private final static Logger logger = LoggerFactory.getLogger(CityServiceImpl.class);

    @Autowired
    private ICityRepository iCityRepository;

    @Autowired
    private ModelMapper mapper;

    @Override
    public List<CityDTO> listAllCities() {

        logger.info("Looking for all the cities");
        List<City> cities = iCityRepository.findAll();
        List<CityDTO> cityDTOS = new ArrayList<>();

        for (City city : cities) {
            cityDTOS.add(mapper.map(city, CityDTO.class));
        }
        return cityDTOS;
    }
}

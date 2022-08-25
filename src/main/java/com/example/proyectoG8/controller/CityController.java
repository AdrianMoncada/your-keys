package com.example.proyectoG8.controller;

import com.example.proyectoG8.model.dto.CityDTO;
import com.example.proyectoG8.service.ICityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/city")
public class CityController {

    @Autowired
    private ICityService iCityService;

    @GetMapping
    public ResponseEntity<List<CityDTO>> ListAllCities(){
        return new ResponseEntity(iCityService.listAllCities(), HttpStatus.OK);
    }
}

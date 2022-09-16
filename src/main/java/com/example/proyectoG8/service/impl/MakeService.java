package com.example.proyectoG8.service.impl;

import com.example.proyectoG8.model.Make;
import com.example.proyectoG8.model.dto.MakeDTO;
import com.example.proyectoG8.repository.IMakeRepository;
import com.example.proyectoG8.service.IMakeService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MakeService implements IMakeService {

    @Autowired
    private IMakeRepository makeRepository;
    @Autowired
    private ModelMapper mapper;


    @Override
    public List<MakeDTO> listMake() {
        List<Make> makes = makeRepository.findAll();
        List<MakeDTO> makeDTOS = new ArrayList<>();

        for (Make make : makes) {
            makeDTOS.add(mapper.map(make, MakeDTO.class));
        }
        return makeDTOS;
    }
}

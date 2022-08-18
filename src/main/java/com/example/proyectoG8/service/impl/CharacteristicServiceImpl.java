package com.example.proyectoG8.service.impl;

import com.example.proyectoG8.model.Characteristic;
import com.example.proyectoG8.model.NuevoModel;
import com.example.proyectoG8.model.Vehicle;
import com.example.proyectoG8.model.dto.CharacteristicDTO;
import com.example.proyectoG8.repository.ICharacteristicRepository;
import com.example.proyectoG8.service.ICharacteristicService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CharacteristicServiceImpl implements ICharacteristicService {
    @Autowired
    private ICharacteristicRepository characteristicRepository;
    @Autowired
    private ModelMapper mapper;

    @Override
    public List<CharacteristicDTO> getAll() {

        List<NuevoModel> lista = characteristicRepository.consultaCaracteristicas();

        List<Characteristic> ch = characteristicRepository.findAll();
        List<Vehicle> vh = ch.get(1).getVehicles();

        List<CharacteristicDTO> characteristicDTOS = new ArrayList<>();
        for (Characteristic item: ch
             ) {
            characteristicDTOS.add(mapper.map(item,CharacteristicDTO.class ));
        }
        return characteristicDTOS;
    }
}

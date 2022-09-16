package com.example.proyectoG8.service.impl;

import com.example.proyectoG8.model.Characteristic;
import com.example.proyectoG8.model.dto.CharacteristicDTO;
import com.example.proyectoG8.repository.ICharacteristicRepository;
import com.example.proyectoG8.service.ICharacteristicService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CharacteristicService implements ICharacteristicService {

    @Autowired
    private ICharacteristicRepository characteristicRepository;
    @Autowired
    private ModelMapper mapper;

    @Override
    public List<CharacteristicDTO> listCharacteristics() {
        List<Characteristic> characteristics = characteristicRepository.findAll();
        List<CharacteristicDTO> characteristicDTOS = new ArrayList<>();

        for (Characteristic characteristic : characteristics) {
            characteristicDTOS.add(mapper.map(characteristic, CharacteristicDTO.class));
        }
        return characteristicDTOS;
    }
}

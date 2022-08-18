package com.example.proyectoG8.controller;

import com.example.proyectoG8.model.Characteristic;
import com.example.proyectoG8.model.dto.CharacteristicDTO;
import com.example.proyectoG8.service.ICharacteristicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/characteristic")
public class CharacteristicController {

    @Autowired
    private ICharacteristicService characteristicService;

    @GetMapping()
    public ResponseEntity<List<CharacteristicDTO>> allCharacteristic() {
        return ResponseEntity.ok(characteristicService.getAll());
    }
}

package com.example.proyectoG8.model.dto;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import java.io.Serializable;
import java.util.List;

@Getter
@Setter
public class CharacteristicDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long idCharacteristic;

    private String nameCharacteristic;

    private String value;

    private String icon;


}

package com.example.proyectoG8.model.dto;

import com.example.proyectoG8.model.Make;
import com.example.proyectoG8.model.Model;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;


@Getter
@Setter
public class VehicleDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long id;

    private MakeDTO make;

    private String rangeName;

    private String description;

    /*private Double latitude ;

    private Double longitude ;*/

    private ModelDTO model;

    private CityDTO city;

    private CategoryDTO category;

    private List<CharacteristicDTO> characteristics;

    private List<ImageDTO> images = new ArrayList<>();

    //private List<Score> scores = new ArrayList<>();

}
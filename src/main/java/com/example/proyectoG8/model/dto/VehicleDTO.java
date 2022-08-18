package com.example.proyectoG8.model.dto;

import java.util.ArrayList;
import java.util.List;


public class VehicleDTO {


    private Long id;


    private Make make;


    private String name;


    private Model model;


    private CityDTO cityDTO;


    private CategoryDTO categoryDTO;


    private List<CharacteristicDTO> characteristicDTOS;


    private List<ImageDTO> imageDTOS = new ArrayList<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Make getMake() {
        return make;
    }

    public void setMake(Make make) {
        this.make = make;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Model getModel() {
        return model;
    }

    public void setModel(Model model) {
        this.model = model;
    }

    public CityDTO getCity() {
        return cityDTO;
    }

    public void setCity(CityDTO cityDTO) {
        this.cityDTO = cityDTO;
    }

    public CategoryDTO getCategory() {
        return categoryDTO;
    }

    public void setCategory(CategoryDTO categoryDTO) {
        this.categoryDTO = categoryDTO;
    }

    public List<CharacteristicDTO> getCharacteristics() {
        return characteristicDTOS;
    }

    public void setCharacteristics(List<CharacteristicDTO> characteristicDTOS) {
        this.characteristicDTOS = characteristicDTOS;
    }

    public List<ImageDTO> getImages() {
        return imageDTOS;
    }

    public void setImages(List<ImageDTO> imageDTOS) {
        this.imageDTOS = imageDTOS;
    }
}

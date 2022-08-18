package com.example.proyectoG8.model.dto;

import java.util.List;

public class CategoryDTO {

    private Long id_category;


    private String title;


    private String description;


    private String UrlImage;


    private List<VehicleDTO> vehicleDTOS;

    public Long getId_category() {
        return id_category;
    }

    public void setId_category(Long id_category) {
        this.id_category = id_category;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUrlImage() {
        return UrlImage;
    }

    public void setUrlImage(String urlImage) {
        UrlImage = urlImage;
    }
}

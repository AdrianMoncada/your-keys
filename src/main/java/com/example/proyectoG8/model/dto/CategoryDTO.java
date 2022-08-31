package com.example.proyectoG8.model.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class CategoryDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long id_category;

    private String title;

    private String description;

    private String UrlImage;

}

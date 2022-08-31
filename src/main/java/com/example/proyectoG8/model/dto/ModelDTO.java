package com.example.proyectoG8.model.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class ModelDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long idModel;

    private String year;

}

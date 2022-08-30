package com.example.proyectoG8.model.dto;


import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class ScoreDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long idScore;

    //private VehicleDTO vehicle;

    private Long usuario_id;

    private Integer score;


}
package com.example.proyectoG8.model.dto;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import java.io.Serializable;
import java.util.List;

@Getter
@Setter
public class CityDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long idCity;


    private String cityName;


    private String provinceName;


    private String countryName;


}

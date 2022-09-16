package com.example.proyectoG8.service.impl;

import com.example.proyectoG8.model.Model;
import com.example.proyectoG8.model.dto.ModelDTO;
import com.example.proyectoG8.repository.IModelRepository;
import com.example.proyectoG8.service.IModelService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ModelService implements IModelService {

    @Autowired
    private IModelRepository modelRepository;
    @Autowired
    private ModelMapper mapper;

    @Override
    public List<ModelDTO> listModel() {
        List<Model> models = modelRepository.findAll();
        List<ModelDTO> modelDTOS = new ArrayList<>();

        for (Model model : models) {
            modelDTOS.add(mapper.map(model, ModelDTO.class));
        }
        return modelDTOS;
    }
}

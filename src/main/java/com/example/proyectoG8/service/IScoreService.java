package com.example.proyectoG8.service;

import com.example.proyectoG8.model.dto.ScoreDTO;

import java.util.List;

public interface IScoreService {
    public ScoreDTO createScore(ScoreDTO scoreDTO);

    public ScoreDTO readScore(Long id);

    public ScoreDTO updateScore(ScoreDTO scoreDTO);

    public void deleteScore(Long id);

    public List<ScoreDTO> listScore(Long vehicleId);

    public Double scoreAverage(Long vehicleId);
}

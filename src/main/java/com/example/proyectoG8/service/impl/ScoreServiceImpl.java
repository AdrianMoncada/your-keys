package com.example.proyectoG8.service.impl;

import com.example.proyectoG8.model.Score;
import com.example.proyectoG8.model.dto.ScoreDTO;
import com.example.proyectoG8.repository.IScoreRepository;
import com.example.proyectoG8.service.IScoreService;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ScoreServiceImpl implements IScoreService {
    private final static Logger logger = LoggerFactory.getLogger(ScoreServiceImpl.class);

    @Autowired
    private IScoreRepository scoreRepository;
    @Autowired
    private ModelMapper mapper;

    @Override
    public ScoreDTO createScore(ScoreDTO scoreDTO) {
        Score score = scoreRepository.save(mapper.map(scoreDTO, Score.class));
        if (score != null){
            logger.info("Se creó exitosamente la calificación");
            return mapper.map(score, ScoreDTO.class);
        }
        logger.error("La calificación no pudo ser creada");
        return null;
    }

    @Override
    public ScoreDTO readScore(Long id) {
        Optional<Score> score = scoreRepository.findById(id);
        ScoreDTO scoreDTO = null;
        if(score.isPresent()){
            scoreDTO = mapper.map(score.get(), ScoreDTO.class);
        }
        return scoreDTO;
    }

    @Override
    public ScoreDTO updateScore(ScoreDTO scoreDTO) {
        Score score = scoreRepository.save(mapper.map(scoreDTO, Score.class));
        if (score != null){
            logger.info("Se actualizó exitosamente la calificación");
            return mapper.map(score, ScoreDTO.class);
        }
        logger.error("La calificación no pudo ser actualizada");
        return null;
    }

    @Override
    public void deleteScore(Long id) {
        logger.info("Eliminando calificación");
        scoreRepository.deleteById(id);
    }

    @Override
    public List<ScoreDTO> listScore(Long vehicleId) {
        List<Score> scores = scoreRepository.findByvehicleId(vehicleId);
        List<ScoreDTO> scoreDTOS = new ArrayList<>();
        for (Score score : scores) {
            scoreDTOS.add(mapper.map(score, ScoreDTO.class));
        }
        return scoreDTOS;
    }

    @Override
    public Double scoreAverage(Long vehicleId) {
        List<Score> scores = scoreRepository.findByvehicleId(vehicleId);
        Double average = 0.0;
        if (scores.size() == 0 || scores.isEmpty()){
            return average;
        }
        for (Score score : scores) {
            average = average + score.getScore();
        }
        average = average/scores.size();
        return average;
    }
}

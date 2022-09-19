package com.example.proyectoG8.controller;

import com.example.proyectoG8.model.dto.ScoreDTO;
import com.example.proyectoG8.service.IScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/score")
public class ScoreController {
    @Autowired
    private IScoreService scoreService;

    @PostMapping
    public ResponseEntity<ScoreDTO> createScore(@RequestBody ScoreDTO scoreDTO){
        return new ResponseEntity(scoreService.createScore(scoreDTO), HttpStatus.OK);
    }

    @GetMapping("/average/{id}")
    public ResponseEntity<Double> averageScore(@PathVariable Long id){
        Double average = scoreService.scoreAverage(id);
        return new ResponseEntity(average, HttpStatus.OK);
    }
}

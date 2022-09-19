package com.example.proyectoG8.repository;

import com.example.proyectoG8.model.Score;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IScoreRepository extends JpaRepository<Score, Long> {

    @Query(value = "select * from scores where vehicle_id = :vehicleId", nativeQuery = true)
    public List<Score> findByvehicleId(Long vehicleId);
}

package com.example.proyectoG8.repository;

import com.example.proyectoG8.model.Characteristic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICharacteristicRepository extends JpaRepository<Characteristic, Long> {
}

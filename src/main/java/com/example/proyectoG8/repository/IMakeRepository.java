package com.example.proyectoG8.repository;

import com.example.proyectoG8.model.Make;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IMakeRepository extends JpaRepository<Make, Long> {
}

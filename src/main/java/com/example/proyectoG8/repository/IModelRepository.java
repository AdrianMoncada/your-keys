package com.example.proyectoG8.repository;


import com.example.proyectoG8.model.Model;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IModelRepository extends JpaRepository<Model, Long> {
}

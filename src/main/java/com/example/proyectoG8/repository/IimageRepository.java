package com.example.proyectoG8.repository;

import com.example.proyectoG8.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IimageRepository extends JpaRepository<Image, Long> {
}

package com.example.proyectoG8.repository;

import com.example.proyectoG8.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IVehicleRepository extends JpaRepository<Vehicle, Long> {
}

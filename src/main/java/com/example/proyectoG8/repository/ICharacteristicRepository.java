package com.example.proyectoG8.repository;

import com.example.proyectoG8.model.Category;
import com.example.proyectoG8.model.Characteristic;
import com.example.proyectoG8.model.NuevoModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ICharacteristicRepository extends JpaRepository<Characteristic, Long> {

  @Query(value = "select v.name from vehicle_characteristic vh inner join vehicles v on (vh.vehicle_id = v.id)\n" +
          "inner join characteristics c on (vh.characteristic_id = c.id);", nativeQuery = true)
    public List<NuevoModel> consultaCaracteristicas();
}

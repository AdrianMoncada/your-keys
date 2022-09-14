package com.example.proyectoG8.repository;

import com.example.proyectoG8.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface IVehicleRepository extends JpaRepository<Vehicle, Long> {

    @Query(value = "select * from vehicles where city_id= :cityId and id_vehicle not in " +
            "(select vehicle_id from bookings where initialdate between :initialDate and " +
            ":finalDate or final_date between :initialDate and :finalDate group by vehicle_id)",
            nativeQuery = true)
    public List<Vehicle> findByDateAndCity(LocalDate initialDate, LocalDate finalDate, Long cityId);

    @Query(value = "select * from vehicles where id_vehicle not in " +
            "(select vehicle_id from bookings where initialdate between :initialDate and " +
            ":finalDate or final_date between :initialDate and :finalDate group by vehicle_id)",
            nativeQuery = true)
    public List<Vehicle> findByDate(LocalDate initialDate, LocalDate finalDate);
}

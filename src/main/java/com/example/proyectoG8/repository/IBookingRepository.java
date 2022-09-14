package com.example.proyectoG8.repository;

import com.example.proyectoG8.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IBookingRepository extends JpaRepository<Booking,Long> {
    @Query(value = "select * from bookings where user_id = :userId",
            nativeQuery = true)
    public List<Booking> findByUserId(Long userId);
}

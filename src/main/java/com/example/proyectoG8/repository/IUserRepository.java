package com.example.proyectoG8.repository;

import com.example.proyectoG8.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface IUserRepository extends JpaRepository<User, Long> {

    @Query(value = "SELECT * FROM users WHERE email = :email", nativeQuery = true)
    public User findUserByEmail(String email);

    Optional<User> findByEmail(String email);
}

package com.example.proyectoG8.service;

public interface IEmailSenderService {
    public void sendEmail(String to, String subject, String message);
}

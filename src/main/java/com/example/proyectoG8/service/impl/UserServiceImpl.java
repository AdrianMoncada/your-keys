package com.example.proyectoG8.service.impl;

import com.example.proyectoG8.model.User;
import com.example.proyectoG8.model.dto.UserDTO;
import com.example.proyectoG8.repository.IUserRepository;
import com.example.proyectoG8.service.IEmailSenderService;
import com.example.proyectoG8.service.IUserService;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
@Transactional
public class UserServiceImpl implements IUserService {

    private final static Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    @Autowired
    private IUserRepository userRepository;

    @Autowired
    private IEmailSenderService emailSender;

    @Autowired
    private ModelMapper mapper;


    @Override
    public UserDTO createUser(UserDTO userDTO) {
        User user = userRepository.save(mapper.map(userDTO, User.class));
        if (user!= null){
            UserDTO userDTO1 = mapper.map(user, UserDTO.class);
            emailSender.sendEmail(user.getEmail(), "Registro exitoso!",
                    "Se ha registrado con exito.");
            return userDTO1;
        }
        logger.error("The user {} couldn't be created successfully", userDTO.getName());
        return null;
    }

    @Override
    public UserDTO readUser(Long id) {
        UserDTO userDTO = null;
        if (userRepository.findById(id).isPresent()) {
            Optional<User> user = userRepository.findById(id);
            userDTO = mapper.map(user.get(), UserDTO.class);
        }
        return userDTO;
    }

    @Override
    public UserDTO updateUser(UserDTO userDTO) {
        User user = userRepository.save(mapper.map(userDTO, User.class));

        return mapper.map(user, UserDTO.class);
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public List<UserDTO> listUser() {
        List<User> users = userRepository.findAll();
        List<UserDTO> userDTOS = new ArrayList<>();

        for (User user : users) {
            userDTOS.add(mapper.map(user, UserDTO.class));
        }
        return userDTOS;

    }

    @Override
    public UserDTO verifyCredentials(UserDTO userDTO) {

        UserDTO userDTOResponse = null;

        User userBdd = userRepository.findUserByEmail(userDTO.getEmail());

        String passwordHashed = userBdd.getPassword();

        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);

        Boolean paswordMatch = argon2.verify(passwordHashed, userDTO.getPassword());

        if (paswordMatch){
            userDTOResponse = mapper.map(userBdd, UserDTO.class);
        }

        return userDTOResponse;

    }
}

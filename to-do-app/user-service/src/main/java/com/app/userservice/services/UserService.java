package com.app.userservice.services;

import com.app.userservice.model.RestMessage;
import com.app.userservice.model.User;
import com.app.userservice.repositories.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private  UserRepository userRepository;

    /**
     * metodo para loguearse con email y password
     * @param email
     * @param password
     * @return
     */
    public RestMessage login(String email, String password) {
        RestMessage restMessage = new RestMessage();
        try {

            User user  = userRepository.findByEmail(email).orElse(null);
            List<User> users = userRepository.findAll();
            if(user == null){
                logger.error("Usuario no encontrado");
                restMessage.setMessage("Usuario no encontrado");
                restMessage.setCode(404);
                return restMessage;
            }

            restMessage.setData(user);
            restMessage.setMessage("Usuario encontrado");
            restMessage.setCode(200);
            logger.info("Usuario encontrado");
            return restMessage;

        } catch(Exception e) {
            logger.error("Error al buscar usuario", e);
            restMessage.setMessage("Error al buscar usuario");
            return restMessage;
        }
    }

    /**
     * metodo para registrar usuario
     * @param user el usuario a crear sin id
     * @return
     */
    public RestMessage signup(User user) {
        System.out.println(user);
        RestMessage restMessage = new RestMessage();
        try {
            userRepository.save(user);
            restMessage.setMessage("Usuario registrado");
            restMessage.setCode(200);
            logger.info("Usuario registrado");
            return restMessage;
        } catch (Exception e) {
            logger.error("Error al registrar usuario", e);
            restMessage.setCode(500);
            restMessage.setMessage("Error al registrar usuario");
            return restMessage;
        }
    }
}

package com.app.userservice.controller;

import com.app.userservice.model.RestMessage;
import com.app.userservice.model.User;
import com.app.userservice.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/login")
    public ResponseEntity<?> getUsuarioByCredenciales(@RequestParam String email, @RequestParam String password) {
        RestMessage restMessage = userService.login(email, password);
        return ResponseEntity.status(restMessage.getCode()).body(restMessage);
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registrarUsuario(@RequestBody User user) {
        RestMessage restMessage = userService.signup(user);
        System.out.println(restMessage);
        return ResponseEntity.status(restMessage.getCode()).body(restMessage);
    }
}

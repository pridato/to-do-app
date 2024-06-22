package com.app.userservice.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity(name = "Users")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String passwordHash;

    @Column(nullable = false)
    private boolean verified = false;

    private String verificationCode;
    private String username;
}

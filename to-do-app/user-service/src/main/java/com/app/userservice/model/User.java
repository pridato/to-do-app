package com.app.userservice.model;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.boot.context.properties.bind.DefaultValue;

@Entity(name = "Users")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password_hash = "";

    @Column(nullable = false)
    private boolean verified = false;

    private String verificationCode;
    private String username;

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", password_hash='" + password_hash + '\'' +
                ", verified=" + verified +
                ", verificationCode='" + verificationCode + '\'' +
                ", username='" + username + '\'' +
                '}';
    }
}

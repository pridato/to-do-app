package com.app.tasksservice.model;

public class UserDTO {
    private Long id;
    private String email;
    private String passwordHash;
    private final boolean verified = false;
    private String verificationCode;
    private String username;
}

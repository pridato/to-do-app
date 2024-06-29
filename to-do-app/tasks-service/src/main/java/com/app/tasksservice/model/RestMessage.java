package com.app.tasksservice.model;

import lombok.Data;

@Data
public class RestMessage {
    private int code;
    private String message;
    private String error;
    private String token;
    private UserDTO data;
    private Object otherData;
}

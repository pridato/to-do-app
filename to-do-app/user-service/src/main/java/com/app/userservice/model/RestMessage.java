package com.app.userservice.model;

import lombok.Data;

@Data
public class RestMessage {
    private  int code;
    private  String message;
    private  String error;
    private  String token;
    private  User data;
    private  Object otherData;
}

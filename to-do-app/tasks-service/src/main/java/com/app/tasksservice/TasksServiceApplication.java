package com.app.tasksservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients(basePackages = {"com.app.tasksservice.feign.clients"})
public class TasksServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(TasksServiceApplication.class, args);
    }

}

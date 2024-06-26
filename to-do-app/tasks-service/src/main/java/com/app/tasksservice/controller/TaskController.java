package com.app.tasksservice.controller;

import com.app.tasksservice.model.RestMessage;
import com.app.tasksservice.model.Task;
import com.app.tasksservice.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tasks")
@CrossOrigin(origins = "*")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @RequestMapping("/add")
    public ResponseEntity<RestMessage> addTask(@RequestBody Task task) {
        RestMessage restMessage = taskService.addTask(task);
        try {
            return ResponseEntity.status(restMessage.getCode()).body(restMessage);
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(restMessage);
        }
    }
}

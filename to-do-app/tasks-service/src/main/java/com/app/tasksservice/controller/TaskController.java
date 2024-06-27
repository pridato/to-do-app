package com.app.tasksservice.controller;

import com.app.tasksservice.model.RestMessage;
import com.app.tasksservice.model.Task;
import com.app.tasksservice.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

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


    @GetMapping("/get-tasks-by-user")
    public ResponseEntity<List<Task>> getTasksByUser(@RequestParam Long userId) {
        try {
            return ResponseEntity.ok().body(taskService.getTasksByIdUser(userId));
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(new ArrayList<>());
        }
    }

    @PostMapping("/update-task")
    public ResponseEntity<RestMessage> updateTask(@RequestBody Task task) {
        RestMessage restMessage = taskService.updateTask(task);
        try {
            return ResponseEntity.status(restMessage.getCode()).body(restMessage);
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(restMessage);
        }
    }
}

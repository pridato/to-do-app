package com.app.tasksservice.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Entity(name = "TASKS")
@Data
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Long userId;

    @Column(nullable = false)
    private String description;

    private Date dueDate;

    private Integer priority; // 1, 2, 3

    @Column(nullable = false)
    private Boolean completed;

    private Long projectId;
}

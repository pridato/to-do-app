package com.app.tasksservice.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Entity
@Data
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Long userId; // Referencia al usuario

    @Column(nullable = false)
    private String description;

    private Date dueDate;

    private Integer priority; // 1, 2, 3

    @ElementCollection
    private List<Date> reminders;

    @ElementCollection
    private List<String> tags;

    @Column(nullable = false)
    private Boolean completed;

    @Column(nullable = false)
    private Long projectId;
}

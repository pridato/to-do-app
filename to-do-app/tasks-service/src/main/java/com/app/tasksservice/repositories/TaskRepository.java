package com.app.tasksservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.app.tasksservice.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long>{
}

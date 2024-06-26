package com.app.tasksservice.services;

import com.app.tasksservice.feign.clients.UserServiceFeignClient;
import com.app.tasksservice.model.RestMessage;
import com.app.tasksservice.model.Task;
import com.app.tasksservice.model.UserDTO;
import com.app.tasksservice.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    private UserServiceFeignClient userServiceFeignClient;

    @Autowired
    private TaskRepository taskRepository;

    /**
     * metodo para obtener un usuario por su id
     *
     * @param userId id del usuario
     * @return usuario
     */
    public UserDTO getUserById(Long userId) {
        return userServiceFeignClient.getUser(userId);
    }


    /**
     * metodo para crear una tarea nueva
     *
     * @param task tarea a crear
     * @return restmessage con el resultado de la operacion
     */
    public RestMessage addTask(Task task) {
        RestMessage restMessage = new RestMessage();
        try {
            taskRepository.save(task);
            restMessage.setMessage("Tarea creada correctamente");
            restMessage.setCode(201);
            restMessage.setOtherData(task);

            return restMessage;
        } catch (Exception ex) {
            restMessage.setMessage("Error al crear la tarea");
            restMessage.setCode(500);
            return restMessage;
        }
    }

    /**
     * metodo para obtener las tareas de un usuario por su id
     *
     * @param userId id del usuario logueado, lo sacamos directamente del estado
     * @return lista de las tareas del usuario en cuestión
     */
    public List<Task> getTasksByIdUser(Long userId) {
        System.out.println(taskRepository.findByUserId(userId));
        return taskRepository.findByUserId(userId).stream().filter(task -> !task.getCompleted()).toList();
    }

    /**
     * metodo para actualizar una task concreta
     *
     * @param task
     * @return
     */
    public RestMessage updateTask(Task task) {
        RestMessage restMessage = new RestMessage();
        // 1º si la tarea pasada del front no tiene id no se puede actualizar
        if (task.getId() == null) {
            restMessage.setMessage("No se ha encontrado la tarea");
            restMessage.setCode(404);
            return restMessage;
        }

        taskRepository.save(task);
        restMessage.setMessage("Tarea actualizada correctamente");
        restMessage.setCode(200);
        return restMessage;
    }
}

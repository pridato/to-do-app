package com.app.tasksservice.feign.clients;

import com.app.tasksservice.model.UserDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "user-service", url = "${user-service.url}")
public interface UserServiceFeignClient {

    @GetMapping("/users/{userId}")
    UserDTO getUser(@PathVariable Long userId);

}

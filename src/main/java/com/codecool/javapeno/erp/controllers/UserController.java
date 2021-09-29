package com.codecool.javapeno.erp.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.codecool.javapeno.erp.entities.User;
import com.codecool.javapeno.erp.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.UUID;

@RestController
@RequestMapping("api/user-service")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    /**
     *
     * @param id user id
     * @return the selected user's data
     */
    @GetMapping({"/user/{id}"})
    public ResponseEntity<Object> getUserById(@PathVariable UUID id) {
        return userService.getUserById(id);
    }

    @PostMapping("/user/{id}")
    public ResponseEntity<String> modifyUserById(@PathVariable UUID id, @RequestBody User updatedUserData) {
        return userService.updateUserById(id, updatedUserData);
    }
}

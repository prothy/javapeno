package com.codecool.javapeno.erp.controllers;

import com.codecool.javapeno.erp.models.UserModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.codecool.javapeno.erp.entities.User;
import com.codecool.javapeno.erp.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;


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
     * @return the selected user data
     */
    @GetMapping({"/user/{id}"})
    public ResponseEntity<Object> getUserById(@PathVariable UUID id) {
        return userService.getUserById(id);
    }

    /**
     *
     * @param id user id
     * @return the selected user data
     */
    @GetMapping("/modify-user/{id}")
    public ResponseEntity<Object> getUser(@PathVariable UUID id) {
        UserModel userModel = new UserModel();
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(userModel);
    }
}

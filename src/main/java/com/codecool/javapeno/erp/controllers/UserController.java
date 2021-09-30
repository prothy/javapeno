package com.codecool.javapeno.erp.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.codecool.javapeno.erp.entities.User;
import com.codecool.javapeno.erp.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
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

    @PostMapping("/add")
    public void addNewUser(@RequestBody User user) {
        userService.addNewUser(user);
    }

    @RequestMapping("/delete/{id}")
    public void inactivateUser(@PathVariable UUID id) {
        userService.inactivateUser(id);
    }

    @PutMapping(path = "/modify")
    public void updateUser(@RequestBody User user) {
        userService.updateUser(user);
    }


    @GetMapping("/users")
    public List<User> getUsers() {
        return userService.getAllUsers();
    }
}

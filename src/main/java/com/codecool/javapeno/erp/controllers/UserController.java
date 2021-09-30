package com.codecool.javapeno.erp.controllers;

import com.codecool.javapeno.erp.entities.Holiday;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.codecool.javapeno.erp.entities.User;
import com.codecool.javapeno.erp.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    /**
     * @param id user id
     * @return the selected user's data
     */
    @GetMapping({"/{id}"})
    public ResponseEntity<Object> getUserById(@PathVariable UUID id) {
        return userService.getUserById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateUserById(@PathVariable UUID id, @RequestBody User updatedUserData) {
        return userService.updateUserById(id, updatedUserData);
    }

    @DeleteMapping("/{id}")
    public void inactivateUser(@PathVariable UUID id) {
        userService.inactivateUser(id);
    }

    @PostMapping("/add")
    public void addNewUser(@RequestBody User user) {
        userService.addNewUser(user);
    }

    @PostMapping("/approve")
    public void approveUpdatedUser(@RequestBody User modifiedUser,
                                   @RequestBody boolean approved) {
        if (approved) userService.updateUser(modifiedUser);
    }

    @GetMapping("/{id}/holidays")
    public List<Holiday> getHolidayByUserId(@PathVariable UUID id,
                                            @RequestParam(name = "from", required = false)
                                            @DateTimeFormat(pattern = "yyyy-MM-dd")
                                                    LocalDate dateFrom,
                                            @RequestParam(name = "to", required = false)
                                            @DateTimeFormat(pattern = "yyyy-MM-dd")
                                                    LocalDate dateTo) {
        return userService.getHolidaysByIdInRange(id, dateFrom, dateTo);
    }

    @GetMapping("/all")
    public List<User> getUsers() {
        return userService.getAllUsers();
    }
}

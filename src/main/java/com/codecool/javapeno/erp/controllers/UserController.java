package com.codecool.javapeno.erp.controllers;

import com.codecool.javapeno.erp.models.UserModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
public class UserController {

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

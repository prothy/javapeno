package com.codecool.javapeno.erp.services;

import com.codecool.javapeno.erp.entities.User;
import com.codecool.javapeno.erp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.UUID;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    private User getUserById(UUID userId) {
        return (User) userRepository.findAllById(Collections.singleton(userId));
    }
}

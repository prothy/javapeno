package com.codecool.javapeno.erp.services;

import com.codecool.javapeno.erp.entities.User;
import com.codecool.javapeno.erp.entities.UserStatus;
import com.codecool.javapeno.erp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Objects;
import java.util.UUID;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User getUserById(UUID userId) {
        return (User) userRepository.findAllById(Collections.singleton(userId));
    }

    public void addNewUser(User user) {
        userRepository.save(user);
    }

    public void inactivateUser(UUID id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException("User with id " + id + " does not exist!"));
        user.setStatus(UserStatus.DELETED);
    }

    public void updateUser(User updatedUser) {
        User user = userRepository.findById(updatedUser.getId())
                .orElseThrow(() -> new IllegalStateException("User not found!"));

        if (!Objects.equals(user.getName(), updatedUser.getName())) {
            user.setName(updatedUser.getName());
        }
    }
}

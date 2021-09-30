package com.codecool.javapeno.erp.services;

import com.codecool.javapeno.erp.entities.Holiday;
import com.codecool.javapeno.erp.entities.User;
import com.codecool.javapeno.erp.repositories.HolidayRepository;
import com.codecool.javapeno.erp.entities.UserStatus;
import com.codecool.javapeno.erp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.Instant;
import java.time.LocalDate;
import java.util.Collections;
import java.util.Objects;
import java.util.List;
import java.util.Optional;
import java.util.List;
import java.util.UUID;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final HolidayRepository holidayRepository;

    @Autowired
    public UserService(UserRepository userRepository, HolidayRepository holidayRepository) {
        this.userRepository = userRepository;
        this.holidayRepository = holidayRepository;
    }

    public ResponseEntity<Object> getUserById(UUID userId) {
        Optional<User> user = userRepository.findById(userId);
        if (user.isEmpty()) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("User not found");
        }
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(user.get());
    }

    public ResponseEntity<String> updateUserById(UUID userId, User updatedUserData) {
        Optional<User> user = userRepository.findById(userId);
        if (user.isEmpty()) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("User is not found");
        }

        updatedUserData.setId(userId);
        updatedUserData.setUpdatedDate(Timestamp.from(Instant.now()));
        userRepository.save(updatedUserData);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body("User data updated");
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public void addNewUser(User user) {
        userRepository.save(user);
    }

    public void inactivateUser(UUID id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException("User with id " + id + " does not exist!"));
        user.setStatus(UserStatus.DELETED);
        userRepository.save(user);
    }

    public void updateUser(User updatedUser) {
        User user = userRepository.findById(updatedUser.getId())
                .orElseThrow(() -> new IllegalStateException("User not found!"));

        if (!Objects.equals(user.getName(), updatedUser.getName())) {
            user.setName(updatedUser.getName());
        }
    }

    public List<Holiday> getHolidaysByIdInRange(UUID userId, LocalDate from, LocalDate to) {
        if (from == null && to == null) return holidayRepository.findAllByUserId(userId);

        if (from == null) from = LocalDate.of(1970, 1, 1);
        if (to == null) to = LocalDate.now();

        return holidayRepository.findAllByUserIdBetween(userId, from, to);
    }
}

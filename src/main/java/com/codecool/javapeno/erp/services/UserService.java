package com.codecool.javapeno.erp.services;

import com.codecool.javapeno.erp.entities.Holiday;
import com.codecool.javapeno.erp.entities.User;
import com.codecool.javapeno.erp.repositories.HolidayRepository;
import com.codecool.javapeno.erp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Collections;
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

    public User getUserById(UUID userId) {
        return (User) userRepository.findAllById(Collections.singleton(userId));
    }

    public List<Holiday> getHolidaysByIdInRange(UUID userId, LocalDate from, LocalDate to) {
        if (from == null && to == null) return holidayRepository.findAllByUserId(userId);

        if (from == null) from = LocalDate.of(1970, 1, 1);
        if (to == null) to = LocalDate.now();

        return holidayRepository.findAllByUserIdBetween(userId, from, to);
    }
}

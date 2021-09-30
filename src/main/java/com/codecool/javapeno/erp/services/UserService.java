package com.codecool.javapeno.erp.services;

import com.codecool.javapeno.erp.entities.Holiday;
import com.codecool.javapeno.erp.entities.User;
import com.codecool.javapeno.erp.repositories.HolidayRepository;
import com.codecool.javapeno.erp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
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

    public List<Holiday> getAllHolidaysById(UUID userId) {
        return holidayRepository.findAllByUserId(userId);
    }

    public List<Holiday> getAllHolidaysByIdBetweenRange(UUID userId, LocalDate from, LocalDate to) {
        return holidayRepository.findAllByUserIdAndDateFromAndDateTo(userId, from, to);
    }
}

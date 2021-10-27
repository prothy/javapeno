package com.codecool.javapeno.erp.services;

import com.codecool.javapeno.erp.entities.User;
import com.codecool.javapeno.erp.repositories.HolidayRepository;
import com.codecool.javapeno.erp.repositories.UserRepository;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
class UserServiceUnitTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private HolidayRepository holidayRepository;

    @InjectMocks
    private UserService userService;

    @Test
    void getUserById_returnsUserIfExistsInDb() {
        UUID uuid = UUID.randomUUID();
        User initUser = new User();
        when(userRepository.findById(uuid)).thenReturn(Optional.of(initUser));

        User foundUser = userService.getUserById(uuid);

        assertEquals(foundUser, initUser);
    }
}
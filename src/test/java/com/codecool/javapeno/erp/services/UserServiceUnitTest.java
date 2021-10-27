package com.codecool.javapeno.erp.services;

import com.codecool.javapeno.erp.entities.User;
import com.codecool.javapeno.erp.repositories.HolidayRepository;
import com.codecool.javapeno.erp.repositories.UserRepository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class UserServiceUnitTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private HolidayRepository holidayRepository;

    @InjectMocks
    private UserService userService;

    UUID uuid;

    @BeforeEach
    void initTest() {
        uuid = UUID.randomUUID();
    }

    @Test
    void getUserById_returnsUserIfExistsInDb() {
        User initUser = new User();
        when(userRepository.findById(uuid)).thenReturn(Optional.of(initUser));

        User foundUser = userService.getUserById(uuid);

        assertEquals(foundUser, initUser);
    }

    @Test
    void getUserById_throwsExceptionIfNotFoundInDb() {
        when(userRepository.findById(uuid)).thenReturn(Optional.empty());

        assertThrows(NoSuchElementException.class, () -> userService.getUserById(uuid));
    }

    @Test
    void updateUserById_returnsValueIfSuccessful() {
        User user = new User();
        when(userRepository.findById(uuid)).thenReturn(Optional.of(user));
        when(userRepository.save(user)).thenReturn(user);

        assertNotNull(userService.updateUserById(uuid, user));
        assertDoesNotThrow(() -> userService.updateUserById(uuid, user));
    }

    @Test
    void updateUserById_throwsExceptionIfNotFoundInDb() {
        User user = new User();
        when(userRepository.findById(uuid)).thenReturn(Optional.empty());

        assertThrows(NoSuchElementException.class, () -> userService.updateUserById(uuid, user));
    }

    @Test
    void deactivateUser_returnsValueIfSuccessful() {
    }
}
package com.codecool.javapeno.erp.controllers;

import com.codecool.javapeno.erp.entities.Holiday;
import com.codecool.javapeno.erp.entities.User;
import com.codecool.javapeno.erp.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
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

    @GetMapping("/user/{id}")
    public User getUserById(@PathVariable UUID id) {
        return userService.getUserById(id);
    }

    @GetMapping("/user/{id}/holidays")
    public List<Holiday> getHolidayByUserId(@PathVariable UUID id,
                                            @RequestParam(name = "from", required = false)
                                            @DateTimeFormat(pattern = "yyyy-MM-dd")
                                                    LocalDate dateFrom,
                                            @RequestParam(name = "to", required = false)
                                            @DateTimeFormat(pattern = "yyyy-MM-dd")
                                                    LocalDate dateTo) {
        return (dateFrom == null || dateTo == null) ? userService.getHolidaysByIdInRange(id, dateFrom, dateTo) : userService.getHolidaysById(id);
    }
}

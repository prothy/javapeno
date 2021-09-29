package com.codecool.javapeno.erp.entities;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.UUID;

public class User {
    private UUID id;
    private LocalDate createdDate;
    private LocalDate updatedDate;

    // personal info
    private String name;
    private String phoneNumber;
    private String email;
    private Address address;

    // work info
    private UserStatus status;
    private UserPrivilege privilege;
    private BigDecimal salary;

}

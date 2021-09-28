package com.codecool.javapeno.erp.entities;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.UUID;

public class User {
    private UUID id;
    private Timestamp createdDate;
    private Timestamp updatedDate;

    // personal info
    private String name;
    private String phoneNumber;
    private String email;
    private Address address;

}

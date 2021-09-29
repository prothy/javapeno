package com.codecool.javapeno.erp.entities;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.UUID;

@Entity
public class User {
    @Column
    @Id
    @GeneratedValue
    private UUID id;

    @Column
    @CreationTimestamp
    private LocalDate createdDate;

    @Column
    private LocalDate updatedDate;

    // personal info
    @Column
    private String name;

    @Column
    private String phoneNumber;

    @Column
    @Email(message = "Email should be valid")
    private String email;

    @Column
    private Address address;

    // work info
    @Column
    @Enumerated(EnumType.STRING)
    private UserStatus status;

    @Column
    @Enumerated(EnumType.STRING)
    private UserPrivilege privilege;

    @Column
    @Enumerated(EnumType.STRING)
    private BigDecimal salary;

}

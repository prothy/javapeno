package com.codecool.javapeno.erp.entities;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.UUID;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private UUID id;

    private LocalDate createdDate;
    private LocalDate updatedDate;

    // personal info
    private String name;
    private String phoneNumber;
    private String email;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", referencedColumnName = "id")
    private Address address;

    // work info
    private UserStatus status;
    private UserPrivilege privilege;
    private BigDecimal salary;
}

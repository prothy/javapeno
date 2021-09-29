package com.codecool.javapeno.erp.entities;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private UUID id;

    @NotNull
    private LocalDate createdDate;
    @NotNull
    private LocalDate updatedDate;

    // personal info
    @NotNull
    private String name;
    private String phoneNumber;
    private String email;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", referencedColumnName = "id")
    private Address address;

    // work info
    @NotNull
    @Enumerated(EnumType.STRING)
    private UserStatus status;
    @NotNull
    @Enumerated(EnumType.STRING)
    private UserPrivilege privilege;
    private BigDecimal salary;

    @OneToMany(mappedBy="transactions")
    Set<Transaction> transactions;
}

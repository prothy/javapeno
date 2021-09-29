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

    public UUID getId() {
        return id;
    }

    public LocalDate getCreatedDate() {
        return createdDate;
    }

    public LocalDate getUpdatedDate() {
        return updatedDate;
    }

    public String getName() {
        return name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public Address getAddress() {
        return address;
    }

    public UserStatus getStatus() {
        return status;
    }

    public UserPrivilege getPrivilege() {
        return privilege;
    }

    public BigDecimal getSalary() {
        return salary;
    }

    public void setUpdatedDate(LocalDate updatedDate) {
        this.updatedDate = updatedDate;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public void setStatus(UserStatus status) {
        this.status = status;
    }

    public void setPrivilege(UserPrivilege privilege) {
        this.privilege = privilege;
    }

    public void setSalary(BigDecimal salary) {
        this.salary = salary;
    }
}

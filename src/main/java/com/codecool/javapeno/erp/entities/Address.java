package com.codecool.javapeno.erp.entities;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import java.util.Locale;
import java.util.UUID;

@Entity
public class Address {
    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private UUID id;
    private String houseNumber;
    @NotNull
    private String street;
    @NotNull
    private String city;
    @NotNull
    private String postalCode;
    @NotNull
    private Locale country;
}

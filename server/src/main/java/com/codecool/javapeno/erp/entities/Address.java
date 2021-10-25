package com.codecool.javapeno.erp.entities;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import java.util.Locale;
import java.util.UUID;

@ApiModel(description = "Details about the user address")
@Entity
public class Address {

    @ApiModelProperty(notes = "The unique id of the user address")
    @Id
    @GeneratedValue
    @GenericGenerator(name="postgres-uuid", strategy = "uuid")
    private UUID id;

    @ApiModelProperty(notes = "The number of the House")
    private String houseNumber;

    @ApiModelProperty(notes = "Name of the Street")
    @NotNull
    private String street;

    @ApiModelProperty(notes = "Name of the City")
    @NotNull
    private String city;

    @ApiModelProperty(notes = "Number of the Postal code")
    @NotNull
    private String postalCode;

    @ApiModelProperty(notes = "Name of the Country")
    @NotNull
    private Locale country;

    public UUID getId() {
        return id;
    }

    public String getHouseNumber() {
        return houseNumber;
    }

    public String getStreet() {
        return street;
    }

    public String getCity() {
        return city;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public Locale getCountry() {
        return country;
    }

    public void setHouseNumber(String houseNumber) {
        this.houseNumber = houseNumber;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public void setCountry(Locale country) {
        this.country = country;
    }
}

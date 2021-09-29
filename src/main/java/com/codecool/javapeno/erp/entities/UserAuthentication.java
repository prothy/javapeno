package com.codecool.javapeno.erp.entities;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;


public class UserAuthentication {

    private UUID id;
    private UUID userId;
    private String userName;
    private String password;


}

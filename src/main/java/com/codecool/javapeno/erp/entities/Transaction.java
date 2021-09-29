package com.codecool.javapeno.erp.entities;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "transactions")
public class Transaction {
    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private UUID id;

    @ManyToOne
    @JoinTable(name="users")
    User user;

    @NotNull
    private Timestamp timestamp;

    @NotNull
    private BigDecimal amount;

    @NotNull
    private String accountNumFrom;

    @NotNull
    private String accountNumTo;
}

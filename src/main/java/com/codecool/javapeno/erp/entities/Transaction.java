package com.codecool.javapeno.erp.entities;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.UUID;

public class Transaction {
    private UUID id;
    private Timestamp timestamp;
    private BigDecimal amount;
    private String accountNumFrom;
    private String accountNumTo;
}

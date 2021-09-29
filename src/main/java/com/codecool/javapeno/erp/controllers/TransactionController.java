package com.codecool.javapeno.erp.controllers;

import com.codecool.javapeno.erp.entities.User;
import com.codecool.javapeno.erp.models.UserTransactionModel;
import com.codecool.javapeno.erp.services.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/transaction-service")
public class TransactionController {

    private final TransactionService transactionService;

    @Autowired
    public TransactionController(TransactionService transactionService) {
        this.transactionService = transactionService;
    }

    @GetMapping("/get-user-transaction/{id}")
    public List<UserTransactionModel> getUserTransaction(@PathVariable UUID id) {
        return transactionService.getUserTransactionById(id);
    }
}

package com.codecool.javapeno.erp.controllers;

import com.codecool.javapeno.erp.entities.Transaction;
import com.codecool.javapeno.erp.models.UserTransactionModel;
import com.codecool.javapeno.erp.services.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/get-user-transactions")
    public List<UserTransactionModel> getUserTransaction(@RequestParam(value = "userId", required = false) UUID userId) {
        if (userId == null) return null;

        return transactionService.getUserTransactionsById(userId);
    }

    @GetMapping("/get-users-top-transaction")
    public UserTransactionModel getUsersTopTransaction(@RequestParam(value = "userId", required = false) UUID userId) {
        if (userId == null) return null;

        return transactionService.getUsersTopTransactionsById(userId);
    }

    @GetMapping("/monthly-report/{month}/{year}")
    public List<Transaction> getMonthlyReport(@PathVariable int month, @PathVariable int year) {
        return transactionService.getTransactionsByMonthAndYear(month, year);
    }

    @GetMapping("/user-report/{year}/{userId}")
    public List<Transaction> getReportsByYearAndUserId(@PathVariable int year, @PathVariable UUID userId) {
        return transactionService.getTransactionsByYearAndUserId(year, userId);
    }
}

package com.codecool.javapeno.erp.controllers;

import com.codecool.javapeno.erp.entities.Transaction;
import com.codecool.javapeno.erp.models.UserTransactionModel;
import com.codecool.javapeno.erp.services.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
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
    public List<UserTransactionModel> getUserTransaction(HttpServletRequest request) {
        String stringId = request.getParameter("id");

        if (transactionService.isIdNull(stringId)) return null;

        UUID id = UUID.fromString(stringId);
        return transactionService.getUserTransactionsById(id);
    }

    @GetMapping("/get-users-top-transaction")
    public UserTransactionModel getUsersTopTransaction(HttpServletRequest request) {
        String stringId = request.getParameter("id");

        if (transactionService.isIdNull(stringId)) return null;

        UUID id = UUID.fromString(stringId);
        return transactionService.getUsersTopTransactionsById(id);
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

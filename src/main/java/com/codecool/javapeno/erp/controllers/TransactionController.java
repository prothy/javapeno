package com.codecool.javapeno.erp.controllers;

import com.codecool.javapeno.erp.entities.Transaction;
import com.codecool.javapeno.erp.models.UserTransactionModel;
import com.codecool.javapeno.erp.services.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/transaction")
@RequiredArgsConstructor
public class TransactionController {
    private final TransactionService transactionService;

    @GetMapping("/all")
    public Page<UserTransactionModel> getUserTransactions(@RequestParam(value = "userId", required = false) UUID userId, Pageable pageable) {

        return transactionService.getUserTransactionsById(userId, pageable);
    }

    @GetMapping("/top")
    public UserTransactionModel getUsersTopTransactions(@RequestParam(value = "userId", required = false) UUID userId) {

        return transactionService.getUsersTopTransactionsById(userId);
    }

    @GetMapping("/report_old")
    public List<Transaction> getReports_old(@RequestParam(value = "year", required = false) Integer year,
                                        @RequestParam(value = "month", required = false) Integer month) {

        return transactionService.getReports(year, month);
    }

    @GetMapping("/report")
    public Page<UserTransactionModel> getReports(@RequestParam(value = "userId", required = false) UUID userId,
                                                 @RequestParam(value = "dateFrom", required = false) String dateFrom,
                                                 @RequestParam(value = "dateTo", required = false) String dateTo){


        return transactionService.getAllTransactionsByUserBetweenDates(userId, dateFrom, dateTo);
    }
}

package com.codecool.javapeno.erp.services;

import com.codecool.javapeno.erp.entities.Transaction;
import com.codecool.javapeno.erp.repositories.TransactionRepository;
import com.codecool.javapeno.erp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class TransactionService {

    private final TransactionRepository transactionRepository;
    private final UserRepository userRepository;

    @Autowired
    public TransactionService(TransactionRepository transactionRepository, UserRepository userRepository) {
        this.transactionRepository = transactionRepository;
        this.userRepository = userRepository;
    }

    public List<Transaction> getTransactionsByMonthAndYear(int month, int year) {
        return transactionRepository.findAllByTimestamp(month, year);
    }

    public List<Transaction> getTransactionsByYearAndUserId(int year, UUID userId) {
        return transactionRepository.findAllByYearAndUserId(year, userId);
    }
}

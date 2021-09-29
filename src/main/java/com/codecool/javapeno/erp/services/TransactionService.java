package com.codecool.javapeno.erp.services;

import com.codecool.javapeno.erp.entities.Transaction;
import com.codecool.javapeno.erp.entities.User;
import com.codecool.javapeno.erp.models.UserTransactionModel;
import com.codecool.javapeno.erp.repositories.TransactionRepository;
import com.codecool.javapeno.erp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class TransactionService {

    private final TransactionRepository transactionRepository;

    @Autowired
    public TransactionService(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    public List<UserTransactionModel> getUserTransactionById(UUID id) {
        List<UserTransactionModel> userTransactionModels = new ArrayList<>();
        List<Transaction> transactions = getAllTransactionByUser(id);

        for (Transaction transaction : transactions) userTransactionModels.add(new UserTransactionModel(transaction));

        return userTransactionModels;
    }

    private List<Transaction> getAllTransactionByUser(UUID id) {
        return transactionRepository.findAllByUserId(id);
    }
}

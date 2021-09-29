package com.codecool.javapeno.erp.services;

import com.codecool.javapeno.erp.models.UserTransactionModel;
import com.codecool.javapeno.erp.repositories.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class TransactionService {

    private final TransactionRepository transactionRepository;

    @Autowired
    public TransactionService(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    public UserTransactionModel getUserTransactionById(UUID id) {
        return transactionRepository.findAllUserTransactionById(id);
    }

}

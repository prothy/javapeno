package com.codecool.javapeno.erp.services;

import com.codecool.javapeno.erp.models.UserTransactionModel;
import com.codecool.javapeno.erp.repositories.TransactionRepository;
import com.codecool.javapeno.erp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public UserTransactionModel getUserTransactionById(UUID id) {
        return userRepository.findFirstByTransactions(id);
    }

}

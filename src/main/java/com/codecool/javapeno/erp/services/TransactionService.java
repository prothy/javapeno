package com.codecool.javapeno.erp.services;

import com.codecool.javapeno.erp.entities.Transaction;
import com.codecool.javapeno.erp.models.UserTransactionModel;
import com.codecool.javapeno.erp.repositories.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class TransactionService {

    private final TransactionRepository transactionRepository;

    @Autowired
    public TransactionService(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    public Page<UserTransactionModel> getUserTransactionsById(UUID id, Pageable pageable) {
        List<UserTransactionModel> userTransactions = new ArrayList<>();
        for (Transaction transaction : getAllTransactionsByUser(id, pageable))
            userTransactions.add(new UserTransactionModel(transaction));

        return new PageImpl<>(userTransactions);
    }

    public UserTransactionModel getUsersTopTransactionsById(UUID id) {
        return new UserTransactionModel(transactionRepository.findTopByUserIdOrderByTimestampDesc(id));
    }

    public List<Transaction> getReports(Integer year, Integer month) {
        if (year != null && month != null)
            return transactionRepository.findAllByYearAndMonth(year, month);

        else if (month == null)
            return transactionRepository.findAllByYear(year);

        return null;
    }

    private List<Transaction> getAllTransactionsByUser(UUID id, Pageable pageable) {
        if (id == null) return null;
        return transactionRepository.findAllByUserId(id, pageable);
    }
}

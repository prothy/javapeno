package com.codecool.javapeno.erp.services;

import com.codecool.javapeno.erp.entities.Transaction;
import com.codecool.javapeno.erp.models.UserTransactionModel;
import com.codecool.javapeno.erp.repositories.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
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

    public Page<UserTransactionModel> getAllTransactionsByUserBetweenDates(UUID id, String dateFrom, String dateTo) {

        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
        Timestamp timestampDateFrom = null;
        Timestamp timestampDateTo = null;
        try {
            timestampDateFrom = new Timestamp((dateFormat.parse(dateFrom)).getTime());
            timestampDateTo = new Timestamp((dateFormat.parse(dateTo)).getTime());
        } catch (ParseException e) {
            e.printStackTrace();
        }

        List<Transaction> userTransactions = transactionRepository.findAllByTimestampBetweenAndUserId(timestampDateFrom, timestampDateTo, id);
        List<UserTransactionModel> userTransactionsModels = new ArrayList<>();
        for (Transaction userTransaction : userTransactions)
            userTransactionsModels.add(new UserTransactionModel(userTransaction));

        return new PageImpl<>(userTransactionsModels);
    }
}

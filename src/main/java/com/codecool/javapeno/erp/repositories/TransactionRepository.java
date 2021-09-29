package com.codecool.javapeno.erp.repositories;

import com.codecool.javapeno.erp.entities.Transaction;
import com.codecool.javapeno.erp.models.UserTransactionModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository("transactionRepository")
public interface TransactionRepository extends JpaRepository<Transaction, UUID> {

    //@Query("SELECT T.TIMESTAMP, T.TARGET, T.AMOUNT FROM TRANSACTION T INNER JOIN USERTRANSACTIONS UT WHERE UT.ID = :id ORDER BY T.TIMESTAMP DESC")
    //UserTransactionModel findAllUserTransactionById(@Param("id") UUID id);

    UserTransactionModel findAllUserTransactionById(@Param("id") UUID id);
}

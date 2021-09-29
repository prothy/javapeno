package com.codecool.javapeno.erp.repositories;

import com.codecool.javapeno.erp.entities.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository("transactionRepository")
public interface TransactionRepository extends JpaRepository<Transaction, UUID> {

    @Query("select t from Transaction t where year(t.timestamp) = :year and month(t.timestamp) = :month")
    List<Transaction> findAllByTimestamp(@Param("month") Integer month, @Param("year") Integer year);

    @Query("select t from Transaction t where year(t.timestamp) = :year and month(t.timestamp) = :month and t.userId = :userId")
    List<Transaction> findAllByTimestampAndUserId(@Param("month") Integer month, @Param("year") Integer year, @Param("userId") UUID userId);
}

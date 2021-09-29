package com.codecool.javapeno.erp.repositories;

import com.codecool.javapeno.erp.entities.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository("transactionRepository")
public interface TransactionRepository extends JpaRepository<Transaction, UUID> {

    List<Transaction> findAllByUserId(@Param("id") UUID id);

}

package com.codecool.javapeno.erp.repositories;

import com.codecool.javapeno.erp.entities.User;
import com.codecool.javapeno.erp.models.UserTransactionModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository("userRepository")
public interface UserRepository extends JpaRepository<User, UUID> {

    UserTransactionModel findFirstByTransactions(@Param("id") UUID id);
    //findAllUserTransactionById(@Param("id") UUID id);

}

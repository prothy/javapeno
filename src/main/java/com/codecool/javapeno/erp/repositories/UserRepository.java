package com.codecool.javapeno.erp.repositories;

import com.codecool.javapeno.erp.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository("userRepository")
public interface UserRepository extends JpaRepository<User, UUID> {
}

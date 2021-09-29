package com.codecool.javapeno.erp.repositories;

import com.codecool.javapeno.erp.entities.Holiday;
import com.codecool.javapeno.erp.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Repository("holidayRepository")
public interface HolidayRepository extends JpaRepository<Holiday, UUID> {
    List<Holiday> findAllByUserId(UUID id);
    List<Holiday> findAllByUserAndAndDateFromAndDateTo(UUID id, Date dateFrom, Date dateTo);
}
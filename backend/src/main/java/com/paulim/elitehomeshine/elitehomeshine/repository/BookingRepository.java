package com.paulim.elitehomeshine.elitehomeshine.repository;

import com.paulim.elitehomeshine.elitehomeshine.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
}

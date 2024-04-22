package com.paulim.elitehomeshine.elitehomeshine.repository;

import com.paulim.elitehomeshine.elitehomeshine.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {
}

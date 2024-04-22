package com.paulim.elitehomeshine.elitehomeshine.service;

import com.paulim.elitehomeshine.elitehomeshine.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingService {
    /**
     * $40 per bathroom
     * $100 base and $50 per room.
     */
    @Autowired
    BookingRepository bookingRepository;

    public double calculateCost (int bedNum, int bathNum){
        double total = 0;
        if (bedNum == 1 || bedNum == 2) total += 100;
        else total += (100 + bedNum * 50 - 100);
        total += bathNum * 40;
        return total;
    }
}

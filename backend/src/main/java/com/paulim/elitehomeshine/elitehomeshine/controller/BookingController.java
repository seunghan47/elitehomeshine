package com.paulim.elitehomeshine.elitehomeshine.controller;

import com.paulim.elitehomeshine.elitehomeshine.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/booking")
public class BookingController {
    @Autowired
    BookingService bookingService;

    @GetMapping("/totalcost")
    public double totalCost() {
        return bookingService.calculateCost(2, 3);
    }
}

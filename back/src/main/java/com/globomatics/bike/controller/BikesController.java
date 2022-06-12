package com.globomatics.bike.controller;

import com.globomatics.bike.model.Bike;
import com.globomatics.bike.repository.BikeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/bikes")
public class BikesController {

    Logger trace = LoggerFactory.getLogger(BikesController.class);
    @Autowired
    private BikeRepository bikeRepository;

    @GetMapping
    public List<Bike> list() {
        trace.info("Inside the list() method");
        return bikeRepository.findAll();
    }

    @GetMapping("/{id}")
    public Bike get(@PathVariable("id") long id) {

        Optional<Bike> bike =  bikeRepository.findById(id);
        if (bike.isPresent()){
            return bike.get();
        }

        return null;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody Bike bike) {
        trace.info(String.valueOf(bike));
        bikeRepository.save(bike);
    }
}

package com.codecool.javapeno.erp.services;

import com.codecool.javapeno.erp.entities.Address;
import com.codecool.javapeno.erp.repositories.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class AddressService {
    private final AddressRepository addressRepository;

    @Autowired
    public AddressService(AddressRepository addressRepository) {
        this.addressRepository = addressRepository;
    }

    public ResponseEntity<Object> getAddressById(UUID addressId) {
        Optional<Address> address = addressRepository.findById(addressId);
        if (address.isEmpty()) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("Address is not found");
        }
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(address);
    }

    public ResponseEntity<String> updateAddressById(UUID addressId, Address updatedAddress) {
        Optional<Address> address = addressRepository.findById(addressId);
        if (address.isEmpty()) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("Address is not found");
        }
        addressRepository.save(updatedAddress);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body("Address data updated");
    }

}

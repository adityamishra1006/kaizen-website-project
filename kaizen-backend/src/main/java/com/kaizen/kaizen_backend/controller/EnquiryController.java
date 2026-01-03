package com.kaizen.kaizen_backend.controller;

import com.kaizen.kaizen_backend.dto.EnquiryRequest;
import com.kaizen.kaizen_backend.dto.EnquiryResponse;
import com.kaizen.kaizen_backend.service.EnquiryService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/enquiries")
@RequiredArgsConstructor
public class EnquiryController {
    private final EnquiryService enquiryService;

    @PostMapping
    public ResponseEntity<EnquiryResponse> submitEnquiry(@Valid @RequestBody EnquiryRequest enquiryRequest){
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(enquiryService.submitEnquiry(enquiryRequest));
    }
}

package com.kaizen.kaizen_backend.service.impl;

import com.kaizen.kaizen_backend.dto.EnquiryRequest;
import com.kaizen.kaizen_backend.dto.EnquiryResponse;
import com.kaizen.kaizen_backend.entity.Enquiry;
import com.kaizen.kaizen_backend.repository.EnquiryRepository;
import com.kaizen.kaizen_backend.service.EnquiryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EnquiryServiceImpl implements EnquiryService {

    private final EnquiryRepository enquiryRepository;


    @Override
    public EnquiryResponse submitEnquiry(EnquiryRequest enquiryRequest) {
        Enquiry enquiry = Enquiry.builder()
                .name(enquiryRequest.getName())
                .email(enquiryRequest.getEmail())
                .phone(enquiryRequest.getPhone())
                .message(enquiryRequest.getMessage())
                .build();
        enquiryRepository.save(enquiry);
        return new EnquiryResponse("Enquiry submitted successfully");
    }
}

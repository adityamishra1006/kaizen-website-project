package com.kaizen.kaizen_backend.service;

import com.kaizen.kaizen_backend.dto.EnquiryRequest;
import com.kaizen.kaizen_backend.dto.EnquiryResponse;
import com.kaizen.kaizen_backend.repository.EnquiryRepository;

public interface EnquiryService {
    EnquiryResponse submitEnquiry(EnquiryRequest enquiryRequest);
}

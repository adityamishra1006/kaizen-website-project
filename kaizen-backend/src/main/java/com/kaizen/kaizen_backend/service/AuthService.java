package com.kaizen.kaizen_backend.service;

import com.kaizen.kaizen_backend.dto.AuthResponse;
import com.kaizen.kaizen_backend.dto.LoginRequest;
import com.kaizen.kaizen_backend.dto.RegisterRequest;

public interface AuthService {
    AuthResponse login(LoginRequest loginRequest);
    void register(RegisterRequest registerRequest);
}

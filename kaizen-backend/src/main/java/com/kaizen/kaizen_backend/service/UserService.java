package com.kaizen.kaizen_backend.service;

import com.kaizen.kaizen_backend.entity.User;

public interface UserService {
    User getUserByEmail(String email);
}

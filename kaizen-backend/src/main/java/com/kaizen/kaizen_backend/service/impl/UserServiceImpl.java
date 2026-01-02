package com.kaizen.kaizen_backend.service.impl;


import com.kaizen.kaizen_backend.entity.User;
import com.kaizen.kaizen_backend.repository.UserRepository;
import com.kaizen.kaizen_backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Override
    public User getUserByEmail(String email){
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("User not found with email: " + email));
    }
}

package com.kaizen.kaizen_backend.config;

import com.kaizen.kaizen_backend.entity.User;
import com.kaizen.kaizen_backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@RequiredArgsConstructor
public class DataInitializer {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Bean
    CommandLineRunner initAdminUser(){
        return args -> {
            String adminEmail = "adminkaizen@yopmail.com";
            if(!userRepository.existsByEmail(adminEmail)){
                User admin = User.builder()
                        .email(adminEmail)
                        .password(passwordEncoder.encode("admin123"))
                        .role("ROLE_ADMIN")
                        .build();

                userRepository.save(admin);
                System.out.println("Admin user created successfully");
            }
        };
    }
}

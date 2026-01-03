package com.kaizen.kaizen_backend.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CourseRequest {
    @NotBlank
    private String title;

    @NotBlank
    private String description;

    @NotNull
    private Double price;
}

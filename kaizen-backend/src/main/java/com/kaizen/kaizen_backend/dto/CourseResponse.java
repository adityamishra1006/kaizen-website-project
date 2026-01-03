package com.kaizen.kaizen_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class CourseResponse {
    private Long id;
    private String title;
    private String description;
    private Double price;
}

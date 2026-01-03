package com.kaizen.kaizen_backend.service;

import com.kaizen.kaizen_backend.dto.CourseRequest;
import com.kaizen.kaizen_backend.dto.CourseResponse;
import com.kaizen.kaizen_backend.entity.Course;

import java.util.List;

public interface CourseService {
    List<CourseResponse> getAllCourses();
    CourseResponse getCourseById(Long id);
    CourseResponse createCourse(CourseRequest request);
    CourseResponse updateCourse(Long id, CourseRequest request);
    void deleteCourse(Long id);
}

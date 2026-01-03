package com.kaizen.kaizen_backend.service.impl;

import com.kaizen.kaizen_backend.dto.CourseRequest;
import com.kaizen.kaizen_backend.dto.CourseResponse;
import com.kaizen.kaizen_backend.entity.Course;
import com.kaizen.kaizen_backend.repository.CourseRepository;
import com.kaizen.kaizen_backend.service.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CourseServiceImpl implements CourseService {

    private final CourseRepository courseRepository;

    @Override
    public List<CourseResponse> getAllCourses() {
        return courseRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    public CourseResponse getCourseById(Long id) {
        Course course = courseRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Course not found"));
        return mapToResponse(course);
    }

    @Override
    public CourseResponse createCourse(CourseRequest request) {
        Course course = Course.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .price(request.getPrice())
                .build();

        return mapToResponse(courseRepository.save(course));
    }

    @Override
    public CourseResponse updateCourse(Long id, CourseRequest request) {
        Course course = courseRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Course not found with id: " + id));
        course.setTitle(request.getTitle());
        course.setDescription(request.getDescription());
        course.setPrice(request.getPrice());

        Course updatedCourse = courseRepository.save(course);

        return mapToResponse(updatedCourse);
    }

    @Override
    public void deleteCourse(Long id) {
        if(!courseRepository.existsById(id)){
            throw new IllegalArgumentException("Course not found");
        }
        courseRepository.deleteById(id);
    }

    private CourseResponse mapToResponse(Course course){
        return new CourseResponse(
                course.getId(),
                course.getTitle(),
                course.getDescription(),
                course.getPrice()
        );
    }
}

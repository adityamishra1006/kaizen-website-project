import api from "./api";

// Fetch All Courses
// http://localhost:8080/api/courses
export const getAllCourses = () => {
    return api.get("/courses");
};

// Get course by id
// http://localhost:8080/api/courses/1
export const getCourseById = (id) => {
    return api.get(`/courses/${id}`);
}

// Create a new Course
// http://localhost:8080/api/courses
export const createCourse = (courseData) => {
    return api.post("/courses", courseData);
}

export const updateCourse = (id, courseData) => {
    return api.put(`/courses/${id}`, courseData);
}

export const deleteCourse = (id) => {
    return api.delete(`/courses/${id}`);
}


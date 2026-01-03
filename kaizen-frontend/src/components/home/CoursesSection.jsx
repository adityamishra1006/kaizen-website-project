import CourseCard from "../course/CourseCard";


const CoursesSection = () => {
    const courses = [
        {
            id: 1,
            title: "IIT JEE",
            description: "Physics, Chemistry, Mathematics",
            fee: "₹19,999",
        },
        {
            id: 2,
            title: "NEET",
            description: "Physics, Chemistry, Biology",
            fee: "₹18,999",
        },
        {
            id: 3,
            title: "Foundation (Class 6–10)",
            description: "Strong basics for Maths & Science",
            fee: "₹9,999",
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Our Courses
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Choose the right program to shape your future
                    </p>
                </div>

                {/* Course Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CoursesSection;

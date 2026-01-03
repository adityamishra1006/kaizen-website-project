const testimonials = [
    {
        name: "Rohit Kumar",
        course: "IIT-JEE",
        message:
            "Kaizen Academy helped me build strong fundamentals and confidence. The faculty support was excellent throughout my preparation.",
    },
    {
        name: "Ananya Singh",
        course: "NEET",
        message:
            "The teaching methodology and regular tests at Kaizen Academy made a huge difference. I highly recommend it for medical aspirants.",
    },
    {
        name: "Aman Verma",
        course: "Foundation",
        message:
            "Starting early with the foundation course gave me clarity and discipline. The environment is very motivating.",
    },
];

const Testimonials = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">

                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">
                        What Our Students Say
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Real stories from our achievers
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid gap-6 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="border rounded-lg p-6 shadow-sm hover:shadow-md transition"
                        >
                            <p className="text-gray-600 text-sm mb-4">
                                “{testimonial.message}”
                            </p>

                            <div className="mt-4">
                                <h4 className="font-semibold text-gray-800">
                                    {testimonial.name}
                                </h4>
                                <p className="text-sm text-blue-600">
                                    {testimonial.course}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

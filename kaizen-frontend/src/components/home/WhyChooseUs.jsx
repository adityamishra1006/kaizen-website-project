const reasons = [
    {
        title: "Experienced Faculty",
        description:
            "Learn from highly qualified and experienced teachers who focus on concept clarity and exam-oriented preparation.",
    },
    {
        title: "Result-Oriented Approach",
        description:
            "Our structured study plans, regular tests, and performance analysis help students achieve consistent results.",
    },
    {
        title: "Personalized Attention",
        description:
            "Small batch sizes ensure individual focus, doubt clearing sessions, and continuous mentoring.",
    },
    {
        title: "Comprehensive Study Material",
        description:
            "Well-researched notes, practice questions, and test series designed as per the latest exam patterns.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">

                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Why Choose Kaizen Academy
                    </h2>
                    <p className="text-gray-600 mt-2">
                        What makes us different from the rest
                    </p>
                </div>

                {/* Reasons Grid */}
                <div className="grid gap-6 md:grid-cols-2">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
                        >
                            <h3 className="text-xl font-semibold text-blue-600 mb-2">
                                {reason.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default WhyChooseUs;

const About = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">

                {/* Page Heading */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800">
                        About Kaizen Academy
                    </h1>
                    <p className="text-gray-600 mt-3">
                        Committed to continuous improvement in education
                    </p>
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* Left Text */}
                    <div>
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                            Who We Are
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Kaizen Academy is a premier coaching institute dedicated to
                            preparing students for competitive examinations like IIT-JEE,
                            NEET, and Foundation courses. Our focus is not just on results,
                            but on building strong fundamentals and confidence.
                        </p>

                        <p className="text-gray-600 mb-4">
                            With experienced faculty, structured teaching methods, and
                            personalized mentoring, we help students achieve academic
                            excellence and long-term success.
                        </p>

                        <p className="text-gray-600">
                            At Kaizen, we believe in the philosophy of <strong>continuous
                            improvement</strong> — learning, evolving, and growing every
                            single day.
                        </p>
                    </div>

                    {/* Right Highlights */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            Why Students Trust Us
                        </h3>

                        <ul className="space-y-3 text-gray-600">
                            <li>✔ Experienced and dedicated faculty</li>
                            <li>✔ Concept-based and exam-oriented teaching</li>
                            <li>✔ Regular tests and performance analysis</li>
                            <li>✔ Personalized attention and mentoring</li>
                            <li>✔ Proven track record of results</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

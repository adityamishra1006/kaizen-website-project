const stats = [
    {
        value: "2500+",
        label: "Students Enrolled",
    },
    {
        value: "450+",
        label: "IIT-JEE Selections",
    },
    {
        value: "320+",
        label: "NEET Selections",
    },
    {
        value: "12+",
        label: "Years of Excellence",
    },
];

const StatsSection = () => {
    return (
        <section className="bg-blue-600 py-12">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {stats.map((stat, index) => (
                    <div key={index} className="text-white">
                        <h3 className="text-3xl md:text-4xl font-bold mb-1">
                            {stat.value}
                        </h3>
                        <p className="text-sm md:text-base opacity-90">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsSection;

import Button from "../common/Button";
import heroImg from "../../images/hero.png";
import {Link} from "react-router-dom";

const HeroSection = () => {
    return (
        <section className="bg-gradient-to-r from-blue-50 to-white py-20">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Left Content */}
                <div>
          <span className="inline-block mb-4 px-4 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
            Admissions Open 2025–26
          </span>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        Kaizen Academy <br />
                        <span className="text-blue-600">
                          Continuous Improvement
                        </span>
                    </h1>

                    <p className="text-gray-600 text-lg mb-8">
                        Empowering students with expert coaching for
                        IIT-JEE, NEET, and Foundation courses.
                        Learn from experienced mentors and achieve your goals.
                    </p>

                    <div className="flex gap-4 mt-6">
                        <Link to="/courses">
                            <Button>
                                Explore Courses
                            </Button>
                        </Link>

                        <Link to="/contact">
                            <Button variant="outline">
                                Enquire Now
                            </Button>
                        </Link>
                    </div>

                </div>

                {/* Right Image */}
                <div className="hidden md:block">
                    <img
                        src={heroImg}
                        alt="Kaizen Academy Classroom"
                        className="rounded-xl shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

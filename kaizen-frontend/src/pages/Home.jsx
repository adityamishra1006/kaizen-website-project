import HeroSection from "../components/home/HeroSection.jsx";
import StatsSection from "../components/home/StatsSection.jsx";
import WhyChooseUs from "../components/home/WhyChooseUs.jsx";
import CourseSection from "../components/home/CoursesSection.jsx";
import Testimonials from "../components/home/Testimonials.jsx";

const Home = () => {
    return (
        <>
            <HeroSection />
            <StatsSection />
            <WhyChooseUs />
            <CourseSection />
            <Testimonials />
        </>
    );
};

export default Home;
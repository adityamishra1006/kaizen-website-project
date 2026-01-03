import Button from "../common/Button";
import { Link } from "react-router-dom";


const CourseCard = ({ course }) => {
    return (
        <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900">
                {course.title}
            </h3>

            <p className="text-gray-600 mt-2">
                {course.description}
            </p>

            <p className="text-gray-700 mt-4 font-medium">
                Fee: {course.fee}
            </p>

            <Link to="/contact">
                <Button className="mt-6">
                    Enquire
                </Button>
            </Link>
        </div>
    );
};

export default CourseCard;

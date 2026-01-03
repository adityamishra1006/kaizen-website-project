import { Link } from "react-router-dom";
import Button from "../components/common/Button";

const NotFound = () => {
    return (
        <section className="min-h-[70vh] flex items-center justify-center bg-gray-50">
            <div className="text-center px-4">
                <h1 className="text-6xl font-bold text-blue-600 mb-4">
                    404
                </h1>

                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Page Not Found
                </h2>

                <p className="text-gray-600 mb-6">
                    The page you are looking for doesn’t exist or has been moved.
                </p>

                <Link to="/">
                    <Button>
                        Go Back Home
                    </Button>
                </Link>
            </div>
        </section>
    );
};

export default NotFound;

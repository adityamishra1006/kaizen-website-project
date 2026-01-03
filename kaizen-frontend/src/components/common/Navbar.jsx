import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "../../services/authService.js";
import Button from "./Button";


const Navbar = () => {
    const authenticated = isAuthenticated();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/"); // redirect after logout
    };

    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="text-xl font-bold text-blue-600">
                    Kaizen Academy
                </Link>

                {/* Navigation */}
                <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

                {/* Auth */}
                <div>
                    {!authenticated ? (
                        <Link to="/login">
                            <Button>Login</Button>
                        </Link>
                    ) : (
                        <Button variant="outline" onClick={handleLogout}>
                            Logout
                        </Button>
                    )}
                </div>

            </div>
        </nav>
    );
};

export default Navbar;

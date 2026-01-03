import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../components/common/Button";
import { register } from "../images/authService.js";

const Register = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            await register(form);
            navigate("/login");
        } catch {
            setError("Registration failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">

                <h2 className="text-3xl font-bold text-center mb-6">
                    Register
                </h2>

                {error && (
                    <p className="text-red-600 text-sm text-center mb-4">
                        {error}
                    </p>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        name="name"
                        placeholder="Full Name"
                        onChange={handleChange}
                        required
                        className="w-full border px-3 py-2 rounded"
                    />

                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={handleChange}
                        required
                        className="w-full border px-3 py-2 rounded"
                    />

                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                        className="w-full border px-3 py-2 rounded"
                    />

                    <Button type="submit" className="w-full">
                        {loading ? "Creating account..." : "Register"}
                    </Button>
                </form>

                <p className="text-center text-sm mt-4">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 font-medium">
                        Login
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default Register;
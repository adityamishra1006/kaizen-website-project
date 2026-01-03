import { useState } from "react";
import Button from "../common/Button";
import Loader from "../common/Loader";
import { login } from "../../images/authService.js";


const LoginModal = ({ onClose }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            await login(formData);
            onClose(); // close modal after login
            window.location.reload(); // simple refresh auth state
        } catch {
            setError("Invalid credentials");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-md rounded-lg p-6 relative">

                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-bold text-center mb-4">
                    Login
                </h2>

                {error && (
                    <p className="text-red-600 text-sm text-center mb-3">
                        {error}
                    </p>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        required
                        className="w-full border px-3 py-2 rounded"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                        className="w-full border px-3 py-2 rounded"
                    />

                    {loading ? (
                        <Loader message="Logging in..." />
                    ) : (
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                    )}
                </form>
            </div>
        </div>
    );
};

export default LoginModal;

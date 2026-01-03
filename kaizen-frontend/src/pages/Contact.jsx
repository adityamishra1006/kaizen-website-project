import { useState } from "react";
import Button from "../components/common/Button";
import Loader from "../components/common/Loader";
import { submitEnquiry } from "../services/enquiryService";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess("");
        setError("");

        try {
            await submitEnquiry(formData);
            setSuccess("Your enquiry has been submitted successfully.");
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
            });
        } catch (err) {
            console.error(err);
            setError("Failed to submit enquiry. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">

                {/* Contact Info */}
                <div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">
                        Contact Us
                    </h1>

                    <p className="text-gray-600 mb-4">
                        Have questions about our courses or admissions?
                        Reach out to us and we’ll get back to you shortly.
                    </p>

                    <ul className="text-gray-600 space-y-3">
                        <li>📍 Bokaro Steel City, Jharkhand</li>
                        <li>📞 +91 98765 43210</li>
                        <li>📧 admissions@kaizen.edu</li>
                    </ul>
                </div>

                {/* Enquiry Form */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Send Us an Enquiry
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-md px-3 py-2"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-md px-3 py-2"
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Your Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-md px-3 py-2"
                        />

                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-md px-3 py-2"
                        />

                        {loading ? (
                            <Loader message="Submitting enquiry..." />
                        ) : (
                            <Button type="submit">Submit Enquiry</Button>
                        )}

                        {success && (
                            <p className="text-green-600 text-sm mt-2">
                                {success}
                            </p>
                        )}

                        {error && (
                            <p className="text-red-600 text-sm mt-2">
                                {error}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};


export default Contact;

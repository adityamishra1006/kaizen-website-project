const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                        Kaizen Academy
                    </h3>
                    <p className="text-sm">
                        Empowering students with continuous improvement.
                        We don’t just teach — we build achievers.
                    </p>
                </div>


                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-medium text-white mb-3">
                        Quick Links
                    </h4>
                    <ul className="space-y-2 text-sm">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Courses</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Programs */}
                <div>
                    <h4 className="text-lg font-medium text-white mb-3">
                        Programs
                    </h4>
                    <ul className="space-y-2 text-sm">
                        <li>IIT-JEE (Main & Advanced)</li>
                        <li>NEET Medical</li>
                        <li>Foundation (Class 8–10)</li>
                        <li>Board Examinations</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-lg font-medium text-white mb-3">
                        Contact Us
                    </h4>
                    <ul className="space-y-2 text-sm">
                        <li>Bokaro Steel City, Jharkhand</li>
                        <li>+91 98765 43210</li>
                        <li>admissions@kaizen.edu</li>
                    </ul>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Kaizen Academy. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

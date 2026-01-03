const Button = ({
                    type = "button",
                    children,
                    onClick,
                    variant = "primary",
                    disabled = false,
                    className = "",
                }) => {
    const baseStyle =
        "px-4 py-2 rounded-md font-medium transition duration-200 focus:outline-none";

    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        danger: "bg-red-600 text-white hover:bg-red-700",
        outline:
            "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
    };


    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyle} ${variants[variant]} ${
                disabled ? "opacity-50 cursor-not-allowed" : ""
            } ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;

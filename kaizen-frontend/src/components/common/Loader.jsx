const Loader = ({ message = "Loading..." }) => {
    return (
        <div className="flex flex-col items-center justify-center py-10">
            {/* Spinner */}
            <div className="h-10 w-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>

            {/* Text */}
            <p className="mt-4 text-sm text-gray-600">{message}</p>
        </div>
    );
};

export default Loader;

import { useEffect, useState } from "react";

/**
 * Generic fetch hook
 * @param {Function} fetchFunction - API function (must return a Promise)
 * @param {Array} deps - dependency array (optional)
 */
const useFetch = (fetchFunction, deps = []) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetchFunction();
                if (isMounted) {
                    setData(response.data ?? response);
                    setError(null);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, deps);

    return { data, loading, error };
};

export default useFetch;

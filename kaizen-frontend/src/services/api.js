import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 10000,
    headers:{
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error.response) {
            const status = error.response.status;
            if (status === 401) {
                console.error("Unauthorized - login required");
            }
            if (status === 500) {
                console.error("Server Error");
            }
        }
        return Promise.reject(error);
    }
)

export default api;
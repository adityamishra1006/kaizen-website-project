import api from "./api.js"

export const login = async (credentials) => {
    const response = await api.post("/auth/login", credentials)

    if(response.data?.token){
        localStorage.setItem("token", response.data.token);
    }
    return response.data;
};

export const logout = () => {
    localStorage.removeItem("token");
}

export const isAuthenticated = () => {
    return !!localStorage.getItem("token");
};
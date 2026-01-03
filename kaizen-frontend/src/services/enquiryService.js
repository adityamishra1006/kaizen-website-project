import api from "./api.js";

export const submitEnquiry = async (data) => {
    const response = await api.post("/enquiries", data);
    return response.data;
}
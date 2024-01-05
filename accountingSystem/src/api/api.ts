import axios from "axios";

const BASE_URL = "/api/Auth";

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type" : 'application/json'
    }
    
});

api.interceptors.request.use(config => {
    return config;
}, (err) => {
    return Promise.reject(err);
});

api.interceptors.response.use((response) => {
    return response;
}, (error) => {
    console.error("Response Error:", error);
    return Promise.reject(error);
});

export default api;




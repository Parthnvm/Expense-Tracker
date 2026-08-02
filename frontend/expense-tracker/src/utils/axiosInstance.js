import axios from "axios";
import { BASE_URL } from "./apiPaths";

const axiosInsantce = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

// Requrest Interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const acessToken = localStorage.getItem("token");
        if (acessToken) {
            config.headers.Authorization = `Bearer ${acessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle common errors globally
        if (error.response) {
            if (error.response.status === 401 ) {
                // Redirect to login page
                window.location.href = "/login";
            } else if (error.response.status === 500) {
                console.error("server erorr. Please try again later.");
            }
        } else if (error.code === "ECONNABORTED") {
            console.error("request timeout. Please try again.");
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
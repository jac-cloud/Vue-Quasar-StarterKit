import axios, { InternalAxiosRequestConfig } from 'axios';
import { useUserStore } from '../store/userStore';

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const userStore = useUserStore();
    const token = userStore.getToken();
    if (!token) {
        return config;
    }
    if (config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    } else {
        config.headers = new axios.AxiosHeaders();
        config.headers.set('Authorization', `Bearer ${token}`);
    }
    return config;
});

export default api;

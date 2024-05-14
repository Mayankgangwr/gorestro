import axios, { AxiosInstance, AxiosResponse } from "axios";

interface LoginData {
    userId: string;
    password: string;
}

interface ApiResponse<T> {
    data: T;
}

class AuthController {
    private axiosInstance: AxiosInstance;
    constructor(apiUrl: string) {
        this.axiosInstance = axios.create({
            baseURL: apiUrl
        });
    }

    private handleError(error: any) {
        console.error("API error:", error);
        throw error;
    }

    async login(data: LoginData): Promise<any> {
        try {
            const response: AxiosResponse<ApiResponse<Document>> = await this.axiosInstance.post("/login", data);
            return response.data.data;
        } catch (err) {
            this.handleError(err);
        }
    }

    async logout(): Promise<any> {
        try {
            const response: AxiosResponse<ApiResponse<Document>> = await this.axiosInstance.post("/logout");
            return response.data.data;
        } catch (err) {
            this.handleError(err);
        }
    }
}

const apiUrl = `${import.meta.env.VITE_API_BASE_URL}`;
const authController = new AuthController(apiUrl);
export default authController;

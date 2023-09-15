import { AxiosResponse } from "axios";
import { appApi } from "../../api";

interface LoginRequest {
    email: string, 
    name: string 
}

const loginApi = async (payload: LoginRequest): Promise<AxiosResponse<string>> => {
    const result = await appApi.post<LoginRequest, AxiosResponse<string>>('/auth/login', payload);
    return result
}

export default loginApi
export type { LoginRequest };

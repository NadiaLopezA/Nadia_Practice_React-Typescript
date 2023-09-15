import { AxiosResponse } from "axios";
import { appApi } from "../../api";

const logOutApi = async () => {
    const result = await appApi.post<void, AxiosResponse<string>>('/auth/logout', null);
    return result
}

export default logOutApi;

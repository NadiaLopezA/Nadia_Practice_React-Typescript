import { AxiosResponse } from "axios";
import { appApi } from "../../../api";


const getBreeds = async (): Promise<AxiosResponse<string[]>> => {
    const result =  await appApi.get<void, AxiosResponse<string[]>>('/dogs/breeds');
    return result;
}

export default getBreeds;

import { AxiosResponse } from "axios";
import { appApi } from "../../../api";
import DogInterface from "../../../interfaces/Dog/DogInterface";

const getDogs = async(payload: string[]): Promise<AxiosResponse<DogInterface[]>> => {

    const result =  await appApi.post<string[], AxiosResponse<DogInterface[]>>('/dogs', payload);
    return result;

}

export default getDogs;
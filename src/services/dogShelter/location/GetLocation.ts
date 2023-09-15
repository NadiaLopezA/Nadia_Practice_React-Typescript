import { AxiosResponse } from "axios";
import { appApi } from "../../../api";
import LocationInterface from "../../../interfaces/Location/LocationInterface";

const getLocations = async(payload: string[]): Promise<AxiosResponse<LocationInterface[]>> => {

    const result =  await appApi.post<string[], AxiosResponse<LocationInterface[]>>('/locations', payload);
    return result;

}

export default getLocations;
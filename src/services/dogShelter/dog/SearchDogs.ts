import { AxiosResponse } from "axios";
import { appApi } from "../../../api";
import { SearchInterfaceRequest } from "../../../interfaces/Dog/SearchInterfaceRequest";
import { SearchInterfaceResponse } from "../../../interfaces/Dog/SearchInterfaceResponse";

const searchDogs = async(payload: SearchInterfaceRequest): Promise<AxiosResponse<SearchInterfaceResponse>> => {

    const result =  await appApi.get<SearchInterfaceRequest, AxiosResponse<SearchInterfaceResponse>>('/dogs/search', { params: payload });
    return result;

}

export default searchDogs;
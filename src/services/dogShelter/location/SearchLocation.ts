import { AxiosResponse } from "axios";
import { appApi } from "../../../api";
import { LocationSearchInterfaceRequest } from "../../../interfaces/Location/LocationSearchInterfaceRequest";
import { LocationSearchInterfaceResponse } from "../../../interfaces/Location/LocationSearchInterfaceResponse";

const searchLocation = async(payload: LocationSearchInterfaceRequest): Promise<AxiosResponse<LocationSearchInterfaceResponse>> => {

    const result =  await appApi.post<LocationSearchInterfaceRequest, AxiosResponse<LocationSearchInterfaceResponse>>('/locations/search', payload);
    return result;

}

export default searchLocation;
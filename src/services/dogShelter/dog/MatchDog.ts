import { AxiosResponse } from "axios";
import { appApi } from "../../../api";
import { MatchInterfaceResponse } from "../../../interfaces/Dog/MatchInterfaceResponse";

const matchDog = async(payload: string[]): Promise<AxiosResponse<MatchInterfaceResponse>> => {

    const result =  await appApi.post<string[], AxiosResponse<MatchInterfaceResponse>>('/dogs/match', payload);
    return result;

}

export default matchDog;
import LocationInterface from "./LocationInterface";

export interface LocationSearchInterfaceResponse {
    results: LocationInterface[],
    total: number
}
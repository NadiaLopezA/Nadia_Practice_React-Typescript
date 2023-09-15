import { PaginationInterfaceRequest } from "../shared/PaginationInterfaceRequest";

interface Coordinates {
    lat: number
    lon: number
}

interface TopLeftBottomRight {
    top: Coordinates,
    left: Coordinates,
    bottom: Coordinates,
    right: Coordinates
}

export interface BottomLeft {
    bottom_left: Coordinates,
    top_right: Coordinates
}

interface BottomRight {
    bottom_right: Coordinates,
    top_left: Coordinates
}

export interface LocationSearchInterfaceRequest extends PaginationInterfaceRequest {
    city?: string, //the full or partial name of a city
    states?: string[], //an array of states
    geoBoundingBox?: TopLeftBottomRight | BottomLeft | BottomRight
}
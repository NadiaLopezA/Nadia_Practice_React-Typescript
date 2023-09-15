import { PaginationInterfaceRequest } from "../shared/PaginationInterfaceRequest";

export interface SearchInterfaceRequest extends PaginationInterfaceRequest {
    breeds?: string[], //an array of breeds
    zipCodes?: string[], //an array of zip codes
    ageMin?: number, //a minimum age
    ageMax?: number, //a maximum age
    sort?: string, // the field by which to sort results, and the direction of the sort; in the format sort=field:[asc|desc]
}
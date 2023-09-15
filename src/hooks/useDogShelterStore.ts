import { useDispatch, useSelector } from 'react-redux';
import { clearErrorMessage, onGetBreedArray, onSearchDogs, onGetDogsInformation, onChangeSearchData, onChangeSortData, onGetDogMatch } from '../store';
import { RootState } from '../store/store';

import getBreeds from '../services/dogShelter/dog/GetBreeds';
import searchDogs from '../services/dogShelter/dog/SearchDogs';
import matchDog from '../services/dogShelter/dog/MatchDog';
import searchLocation from '../services/dogShelter/location/SearchLocation';
import getLocation from '../services/dogShelter/location/GetLocation';
import getDogs from '../services/dogShelter/dog/GetDogs';
import { SearchInterfaceRequest } from '../interfaces/Dog/SearchInterfaceRequest';
import { SortInterface } from '../interfaces/shared/SortInterface';
import { LocationSearchInterfaceRequest } from '../interfaces/Location/LocationSearchInterfaceRequest';

export const useDogShelter = () => {
    
    const {   dogBreedsArray, searchData, sortData, dogSearchResult, dogsInformationArray, dogMatch } = useSelector( (state: RootState) => state.dogShelter);
    const dispatch = useDispatch();

    const getDogBreeds = async() => {        

        try{
            const result = await getBreeds();
            
            if (result.data) {
                dispatch(onGetBreedArray(result.data));  
                             
            }else{
                throw new Error('Error at getting breeds, please contact your administrator');                
            }

        }catch( error ){
            console.log(error);
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);

        }
    }

    const updateSearchData = async(payload: SearchInterfaceRequest) => {
        dispatch(onChangeSearchData(payload));
    }

    const updateSortData = async(payload: SortInterface) => {
        dispatch(onChangeSortData(payload));
    }

    const getMatch = async(payload: string[]) => {
        const result = await matchDog(payload)
        const dogsInfo = await getDogs([result.data.match]);
        const dog = dogsInfo.data[0]
        const locationsInfo = await getLocation([dog.zip_code]);
        const location = locationsInfo.data[0]
        console.log({dog, location})

        dispatch(onGetDogMatch({
            dog,
            location
        }));
    }
    
    const searchDogsWithLocationFilters = async(filters: SearchInterfaceRequest, locationFilters: LocationSearchInterfaceRequest) => {
        const result = await searchLocation(locationFilters);
        const zipCodes = result.data.results.map(location => location.zip_code)
        const newFilters = {
            ...filters,
            zipCodes
        }
        console.log({locationFilters, result})
        updateSearchData(newFilters)
        if (zipCodes.length > 0) {
            searchDogResults(newFilters);
        } else {
            dispatch(onSearchDogs({}));
            dispatch(onGetDogsInformation([]));
        }
        dispatch(onGetDogMatch({}));
    }

    const searchDogResults = async(extraFilters?: SearchInterfaceRequest) => {
        try{
            const sort = `${sortData.sortFilter}:${sortData.sortType}`

            const filters: SearchInterfaceRequest = {...searchData, sort, ...extraFilters}
            if (filters.ageMax = 20) delete filters.ageMax

            const result = await searchDogs(filters);
            console.log({filters, result})
            const resultIds = result.data.resultIds
            
            dispatch(onSearchDogs(result.data));

            const dogsInfo = await getDogs(resultIds);
            dispatch(onGetDogsInformation(dogsInfo.data));
            dispatch(onGetDogMatch({}));

        }catch(error){
            throw new Error('Error at searching dogs, please contact your administrator');                
        }
    }

    return{
        // //Properties
        dogBreedsArray, 
        searchData, 
        dogSearchResult,
        dogsInformationArray,
        dogMatch,
        // //Methods
        getDogBreeds,
        searchDogResults,
        searchDogsWithLocationFilters,
        updateSearchData,
        updateSortData,
        getMatch
        // checkAuthToken
    }

}
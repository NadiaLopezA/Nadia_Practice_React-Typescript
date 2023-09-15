import { createSlice } from '@reduxjs/toolkit';
import DogInterface from '../../interfaces/Dog/DogInterface';
import { SearchInterfaceResponse } from '../../interfaces/Dog/SearchInterfaceResponse';
import { SearchInterfaceRequest } from '../../interfaces/Dog/SearchInterfaceRequest';
import { SortInterface } from '../../interfaces/shared/SortInterface';
import DogMatchInterface from '../../interfaces/Dog/DogMatchInterface';

export const dogShelterSlice = createSlice({
    name: 'auth',
    initialState: {
        dogBreedsArray: [] as string[],
        searchData: {} as SearchInterfaceRequest,
        sortData: { sortType: "asc", sortFilter: "breed" } as SortInterface,
        dogSearchResult: {} as SearchInterfaceResponse,
        dogsInformationArray: [] as DogInterface[],
        dogMatch: {} as DogMatchInterface
    },
    reducers: {
       onGetBreedArray: (state, { payload }) => {
        state.dogBreedsArray = payload;
       },
       onSearchDogs: (state, {payload}) => {
        state.dogSearchResult = payload;
       },
       onGetDogsInformation: (state, {payload}) => {
        state.dogsInformationArray = payload;
       },
       onChangeSearchData: (state, {payload}) => {
        state.searchData = payload;
       },
       onChangeSortData: (state, {payload}) => {
        state.sortData = payload;
       },
       onGetDogMatch: (state, {payload}) => {
        state.dogMatch = payload;
       },
    }
});

export const { onGetBreedArray, onSearchDogs, onGetDogsInformation, onChangeSearchData, onChangeSortData, onGetDogMatch } = dogShelterSlice.actions;
import { useState, useEffect } from 'react';

import { useDogShelter } from "../../hooks/useDogShelterStore";

import { Badge } from "./Badge";
import { DoubleSlider } from './filterComponents/DoubleSlider';

import { states, cities } from '../../../assets/data/statesAndCities';
import { SliderComponent } from './filterComponents/SliderComponent';
import { SearchInterfaceRequest } from '../../interfaces/Dog/SearchInterfaceRequest';
import { BottomLeft, LocationSearchInterfaceRequest } from '../../interfaces/Location/LocationSearchInterfaceRequest';


export const Filters = () => {
    const [minVal, setMinVal] = useState(0);
    const [maxVal, setMaxVal] = useState(20);
    const [breedsArray, setBreedsArray] = useState<string[]>([]);
    const [statesArray, setStateArray] = useState<string[]>([]);
    const [city, setCity] = useState("");
    const [enabledToggle, setEnabledToggle] = useState(false);
    const [maxDistance, setMaxDistance] = useState(50);
    const [coordinates, setCoordinates] = useState<GeolocationCoordinates>();

    const { getDogBreeds, dogBreedsArray, searchDogResults, updateSearchData, searchDogsWithLocationFilters } = useDogShelter();

    const addBreed = (event: any) => {
        if (breedsArray.includes(event.target.value)) return
        setBreedsArray([...breedsArray, event.target.value]);
    }

    const addState = (event: any) => {
        if (statesArray.includes(event.target.value)) return
        setStateArray([...statesArray, event.target.value]);
    }

    const getNewCoordinates = (lat: number, lon: number, rad: number): BottomLeft => {
        const rEarth = 6371000.0
        const getNewLatitude = ((data: {lat: number, dy: number}) => data.lat  + (data.dy / rEarth) * (180 / Math.PI));
        const getNewLongitude = ((data: {lat: number, lon: number, dx: number}) => data.lon + (data.dx / rEarth) * (180 / Math.PI) / Math.cos(data.lat * Math.PI/180));
    
        const bottomLeft = {
            lat: getNewLatitude({lat, dy: rad * -1}),
            lon: 0
        }
        bottomLeft.lon = getNewLongitude({lat: bottomLeft.lat, lon, dx: rad * -1})
    
        const topRight = {
            lat: getNewLatitude({lat, dy: rad}),
            lon: 0
        }
        topRight.lon = getNewLongitude({lat: topRight.lat, lon, dx: rad})
    
        return {bottom_left: bottomLeft, top_right: topRight}
    }

    const userLocalization = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setCoordinates(position.coords)
                    setEnabledToggle(!enabledToggle);
                },
                (error) => {
                    console.error(error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }

    const onSubmit = (event: any) => {
        event.preventDefault();
        const searchData: SearchInterfaceRequest = { breeds: breedsArray, ageMin: minVal, ageMax: maxVal }
        updateSearchData(searchData)

        if (statesArray.length > 0 || city || enabledToggle) {
            const locationFilters: LocationSearchInterfaceRequest = {
                ...(city ? {city} : {}),
                ...(statesArray.length > 0 ? {states: statesArray} : {}),
            }
            if (coordinates && maxDistance < 100 && enabledToggle) {
                const searchCoordinates = getNewCoordinates(coordinates.latitude, coordinates.longitude, maxDistance)
                locationFilters.geoBoundingBox = searchCoordinates
            }
            searchDogsWithLocationFilters(searchData, locationFilters);

        } else {
            searchDogResults(searchData);
        }


    }

    useEffect(() => {
        getDogBreeds();
    }, []);

    return (
        <>
            <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="sidebar-multi-level-sidebar" className="h-content w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="grid grid-rows-1 grid-flow-col">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 300 400" fill="none">
                        <path d="M74 211.658C99.0457 142.251 155.836 87.1314 226.717 108.765C276.177 123.861 255.428 151.992 274.648 170.486C285.492 178.829 314.933 167.631 322.548 178.047C329.28 187.259 324.416 204.065 322.548 215.097C315.179 258.597 265.313 265 223.065 265" stroke="#000000" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M325 194C321.518 187.392 313.572 181.214 304 176" stroke="#000000" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M132.242 181.22C129.728 194.908 90.9731 288.143 131.095 296.086C205.608 306.73 196.665 221.971 196.665 169" stroke="#000000" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M234 168V173" stroke="#000000" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <p className="mb-12 text-left text-l mt-4 font-bold text-gray-900 dark:text-white">
                        What are you looking for?
                    </p>
                </div>
                <div>
                    <p className="mb-4 text-left text-l mt-4 font-bold text-gray-900 dark:text-white">
                        AGE RANGE
                    </p>
                    <DoubleSlider
                        minVal={minVal}
                        maxVal={maxVal}
                        setMinVal={setMinVal}
                        setMaxVal={setMaxVal}
                    />
                </div>
                <div className='mt-16'>
                    <p className="mb-2 text-left text-l mt-4 font-bold text-gray-900 dark:text-white">
                        BREEDS
                    </p>
                    <label className="sr-only">Underline select</label>
                    <select
                        id="underline_select"
                        name="breedSelected"
                        className="ml-2 block py-2.5 px-0 w-64 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                        onChange={addBreed}
                        value="Choose a breed"
                    >
                        <option>Choose a breed</option>

                        {
                            dogBreedsArray.map((breed: string, i: number) => (
                                <option key={i}>{breed}</option>
                            ))
                        }
                    </select>
                    <div className='p-2'>
                        {
                            breedsArray.map((breed: string, i: number) => (
                                <Badge
                                    key={i}
                                    title={breed}
                                    color="purple"
                                    deleteFunction={() => { setBreedsArray(breedsArray.filter(a => a !== breed)) }}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className='mt-16'>
                    <p className="mb-2 text-left text-l mt-4 font-bold text-gray-900 dark:text-white">
                        STATES
                    </p>
                    <label className="sr-only">Underline select</label>
                    <select
                        id="underline_select"
                        className="ml-2 block py-2.5 px-0 w-64 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                        onChange={addState}
                        value="Choose a state"
                    >
                        <option>Choose a state</option>

                        {
                            states.map((state, i: number) => (
                                <option key={i}>{state.state}</option>
                            ))
                        }
                    </select>
                    <div>
                        {
                            statesArray.map((state: string, i: number) => (
                                <Badge
                                    key={i}
                                    title={state}
                                    color="pink"
                                    deleteFunction={() => { setStateArray(statesArray.filter(a => a !== state)) }}
                                />
                            ))
                        }
                    </div>
                    <div className='mt-8'>
                        <p className="mb-2 text-left text-l mt-2 font-bold text-gray-900 dark:text-white">
                            CITY
                        </p>
                        <label className="sr-only">Underline select</label>
                        <select id="underline_select"
                            onChange={(event) => setCity(event.target.value)}
                        className="ml-2 block py-2.5 px-0 w-64 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option>Choose a city</option>

                            {
                                cities.map((city, i: number) => (
                                    <option key={i}>{city}</option>
                                ))
                            }
                        </select>
                        <div className='mt-12'>
                            <div className="relative flex flex-col items-left justify-center overflow-hidden">
                                <div className="flex">
                                    <label className="inline-flex relative items-center mr-5 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={enabledToggle}
                                            readOnly
                                        />
                                        <div
                                            onClick={() => {
                                                userLocalization()
                                            }}
                                            className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-violet-200"
                                        ></div>
                                        <span className="ml-2 text-sm font-medium text-gray-900">
                                            Search only near me
                                        </span>
                                    </label>
                                </div>
                            </div>

                            <div className='mt-8 ml-2 mr-2'>
                                {
                                    enabledToggle &&
                                    <div>
                                        <p className="mb-2 text-left text-xs mt-4 font-bold text-gray-900 dark:text-white">
                                            MAXIMUM DISTANCE
                                        </p>
                                        <SliderComponent
                                            maxVal={maxDistance}
                                            setMaxVal={setMaxDistance}
                                        />
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className='mt-12'>
                        <button
                            className="relative inline-flex items-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
                            onClick={onSubmit}
                        >
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Search!
                            </span>
                        </button>
                    </div>
                </div>
            </aside >
        </>
    );
}
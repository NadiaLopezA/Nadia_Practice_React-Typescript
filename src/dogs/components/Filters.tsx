import React from "react";

import {
    Typography,
    List,
    ListItem,
    ListItemPrefix,
} from "@material-tailwind/react";

import {
    PresentationChartBarIcon,
} from "@heroicons/react/24/solid";
import { MapIcon } from "@heroicons/react/24/outline";


export const Filters = () => {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value: number) => {
        setOpen(open === value ? 0 : value);
    };

    const [defaultSelect, setDefaultSelect] = React.useState(undefined);

    return (
        <>
            <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="sidebar-multi-level-sidebar" className="h-[calc(100vh-4rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="mb-2 p-4">
                    <Typography variant="h5" color="blue-gray">
                        What are you looking for?
                    </Typography>
                </div>
                <List>
                    <ListItem className="p-0">
                        <ListItemPrefix>
                            <PresentationChartBarIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <Typography color="blue-gray" className="mr-auto font-normal">
                            Age
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <label className="block mb-2 mr-2 text-sm font-medium text-gray-900 dark:text-white">Minimum</label>
                        <input id="steps-range" type="range" min="0" max="5" value="2.5" step="0.5" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                    </ListItem>
                    <ListItem className="mb-4">
                        <label className="block mb-2 mr-2 text-sm font-medium text-gray-900 dark:text-white">Maximum</label>
                        <input id="steps-range" type="range" min="0" max="5" value="2.5" step="0.5" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                    </ListItem>
                    <ListItem className="p-0">
                        <ListItemPrefix>
                            <i className="fa-solid fa-dog"></i>
                        </ListItemPrefix>
                        <Typography color="blue-gray" className="mr-auto font-normal">
                            Breeds
                        </Typography>
                    </ListItem>
                    <ListItem className="mb-10">
                        <label className="sr-only">Underline select</label>
                        <select id="underline_select" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option selected>Choose a breed</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <MapIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Location
                    </ListItem>
                    <ListItem className="mb-8">
                        <label className="sr-only">Underline select</label>
                        <select id="underline_select" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option selected>Choose a state</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </ListItem>
                    <ListItem>
                        <label className="sr-only">Underline select</label>
                        <select id="underline_select" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option selected>Choose a city</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </ListItem>
                    <ListItem className="text-sm mt-4">
                        Advanced location searching
                    </ListItem>
                    <ListItem>
                        <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-small rounded-lg text-xs px-3 py-2 text-center mr-2 mb-2">Open map</button>
                        <div className="relative z-0">
                            <input type="text" id="disabled_standard" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " disabled />
                            <label className="absolute text-sm text-gray-400 dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Disabled standard</label>
                        </div>
                    </ListItem>
                    <ListItem className="">
                        <label className="block mb-2 mr-2 text-sm font-medium text-gray-900 dark:text-white">Maximum</label>
                        <input id="steps-range" type="range" min="0" max="5" value="2.5" step="0.5" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                    </ListItem>
                    <ListItem className="ml-40">
                        <button className="relative inline-flex items-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Search!
                            </span>
                        </button>
                    </ListItem>
                </List>
            </aside>
        </>
    );
}
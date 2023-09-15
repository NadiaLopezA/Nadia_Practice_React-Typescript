// import React from "react";

import { DoggieCard } from "../components/DoggieCard"
import { Pagination } from "../components/Pagination"

import { useDogShelter } from "../../hooks/useDogShelterStore";
import { ChevronDownIcon, StarIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { MatchDoggieCard } from "../components/MatchDoggieCard";


export const ResultsPage = () => {
  const { searchDogResults, updateSortData, dogsInformationArray, dogSearchResult, getMatch, dogMatch } = useDogShelter();

  const [selectedDogs, setSelectedDogs] = useState<string[]>([]);
  const [sortType, setSortType] = useState("asc");
  const [sortFilter, setSortFilter] = useState("breed");

  const changeSortFilter = (data: string) => {
    setSortFilter(data.toLowerCase())
    updateSortData({ sortFilter, sortType })
    const sort = `${data.toLowerCase()}:${sortType}`
    searchDogResults({ sort });
  }

  const changeSortType = (data: string) => {
    setSortType(data)
    updateSortData({ sortFilter, sortType })
    const sort = `${sortFilter}:${data}`
    searchDogResults({ sort });
  }

  const matchDog = () => {
    getMatch(selectedDogs)
    setSelectedDogs([])
  }


  return (
    <>
      <div className="mt-4 bg-gradient-to-r from-green-300/25 via-yellow-100/25 to-pink-200/25 px-4 rounded-2xl">
        <div>
          <img className="h-20 w-20 rounded-lg opacity" src="../assets/img/dogsApp/candidates.png" alt="image description" />
          Candidates selected: {selectedDogs.length}
        </div>

        <div className='mt-12'>
          <button
            className="relative inline-flex items-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
            onClick={matchDog}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Match!
            </span>
          </button>
        </div>


        {
          Object.entries(dogMatch).length > 0 && <MatchDoggieCard
            dog={dogMatch.dog}
            location={dogMatch.location}
          />
        }


        <select
          id="underline_select"
          name="breedSelected"
          className="ml-2 block py-2.5 px-0 w-64 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          onChange={(event) => changeSortFilter(event.target.value)}
        >
          <option>Breed</option>
          <option>Age</option>
          <option>Name</option>
        </select>

        <a
          href="#"
          className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          {
            sortType === "asc" && <ChevronDownIcon onClick={() => changeSortType("desc")} className="h-5 w-5" aria-hidden="true" />
          }
          {
            sortType === "desc" && <ChevronUpIcon onClick={() => changeSortType("asc")} className="h-5 w-5" aria-hidden="true" />
          }
        </a>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {
          dogsInformationArray.map((dog, i: number) => (
            <div
              onClick={() => selectedDogs.includes(dog.id) ? setSelectedDogs(selectedDogs.filter(id => id !== dog.id)) : setSelectedDogs([...selectedDogs, dog.id])}
              key={i}>

              <DoggieCard

                name={dog.name}
                img={dog.img}
                age={dog.age}
                zip_code={dog.zip_code}
                breed={dog.breed}
              />
              {
                selectedDogs.includes(dog.id) && <StarIcon onClick={() => changeSortType("desc")} className="h-5 w-5" aria-hidden="true" />
              }
            </div>

          ))
        }
      </div>
      <Pagination
        total={dogSearchResult.total}
        pageSize={25}
      />
    </>
  )
}

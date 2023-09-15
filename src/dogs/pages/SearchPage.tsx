// import React from "react";

import { NavbarLogin } from "../components/NavbarLogin"
import { Filters } from "../components/Filters"
import { ResultsPage } from "./ResultsPage";
import { useDogShelter } from "../../hooks/useDogShelterStore";


export const SearchPage = () => {
  const { dogSearchResult } = useDogShelter();

  return (
    <>
      <NavbarLogin />
      <div className="grid grid-cols-6 gap-4">
        <div className=" col-start-1 px-2 w-96">
          <Filters />
        </div>
        <div className="col-start-2 col-span-5 px-4">
          
          {
            dogSearchResult.total > 0 && <ResultsPage />
          }

        </div>
      </div>
    </>
  )
}

// import React from "react";

import { NavbarLogin } from "../components/NavbarLogin"
import { DoggieCard } from "../components/DoggieCard"
import { Filters } from "../components/Filters"
import { Pagination } from "../components/Pagination"


export const SearchPage = () => {

  return (
    <>
      <NavbarLogin />
      <div className="grid grid-cols-6 gap-4">
        <div className=" col-start-1 px-2 w-96">
          <Filters />
        </div>
        <div className="col-start-2 col-span-5 px-4">
          <div className="grid grid-rows-6 gap-4 px-4">
            <div className="mt-4 bg-gradient-to-r from-green-300/25 via-yellow-100/25 to-pink-200/25 px-4 rounded-2xl">
              <div>
                <img className="h-20 w-20 rounded-lg opacity" src="../assets/img/dogsApp/candidates.png" alt="image description" />
                Candidates selected
              </div>
            </div>
            <div className="row-span-4 px-4 mt-2">
              <DoggieCard />
            </div>
            <div className=" row-span-1 px-4">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

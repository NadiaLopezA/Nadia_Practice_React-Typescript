import React from 'react'


export const DoggieCard = () => {
    return (
        <div className="w-64 rounded overflow-hidden shadow-lg">
            <img className="w-64" src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Sunset in the mountains" />
            <div className="px-6 py-1">
                <div className="font-bold text-xl mb-2 text-center">Name</div>
            </div>
            <div className="px-6 pt-4 pb-2">
                <div className='grid grid-rows-2 grid-flow-col gap-2'>
                    <div>Breed</div>
                    <div>Zip Code</div>
                    <div>Age</div>
                </div>
                <div className='mt-4'>
                    <button type="button" className=" float-right px-3 py-1 text-xs font-medium text-center inline-flex items-center text-black bg-white rounded-lg border-yellow-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-1  hover:bg-blue-800">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

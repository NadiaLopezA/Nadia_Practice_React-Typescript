import React from 'react'

export const Badge = ({ title, deleteFunction }: any) => {
    return (
        <>
            <span id="badge-dismiss-purple" className="inline-flex items-center px-2 py-1 mr-2 mt-1 text-sm font-medium text-purple-800 bg-purple-100 rounded dark:bg-purple-900 dark:text-purple-300">
                {title}
                <button type="button" onClick={deleteFunction} className="inline-flex items-center p-1 ml-2 text-sm text-purple-400 bg-transparent rounded-sm hover:bg-purple-200 hover:text-purple-900 dark:hover:bg-purple-800 dark:hover:text-purple-300" data-dismiss-target="#badge-dismiss-purple" aria-label="Remove">
                    <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>                    
                </button>
            </span>
        </>
    )
}

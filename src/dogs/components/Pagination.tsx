import { useState } from 'react'
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { useDogShelter } from '../../hooks/useDogShelterStore';

export const Pagination = (payload: { total: number, pageSize: number }) => {
    const { searchDogResults } = useDogShelter();

    const [page, setPage] = useState(1);

    const numPages = Math.ceil(payload.total / payload.pageSize) || 1

    const truncatePagination = (numPages - page) >= 7
    const from = (page - 1) * payload.pageSize + 1
    const to = Math.min(from + payload.pageSize, payload.total)

    const changePage = (page: number) => {
        setPage(page)
        searchDogResults({
            from: (page - 1) * payload.pageSize,
            size: payload.pageSize
        });
    }
    return (
        <div className="flex bottom-0 mt-16 items-center justify-between border-gray-200 bg-white px-4 py-3 sm:px-6">

            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{from}</span> to <span className="font-medium">{to}</span> of{' '}
                        <span className="font-medium">{payload.total}</span> results
                    </p>
                </div>
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        <a
                            href="#"
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            onClick={() => changePage(1)}
                        >
                            <span className="sr-only">Start</span>
                            <ChevronDoubleLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                        <a
                            href="#"
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            onClick={() => page > 1 ? changePage(page - 1) : null}
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                        {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                        {
                            Array.apply(0, Array(numPages - page + 1)).map((a, i: number) => {
                                if (truncatePagination && i >= 3) return;
                                if (i === 0)
                                    return <a
                                        key={page + i}
                                        href="#"
                                        aria-current="page"
                                        className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        onClick={() => changePage(page + i)}
                                    >
                                        {page + i}
                                    </a>
                                return <a
                                    key={page + i}
                                    href="#"
                                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                    onClick={() => changePage(page + i)}
                                >
                                    {page + i}
                                </a>
                            })
                        }
                        {
                            truncatePagination && <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                                ...
                            </span>
                        }

                        {
                            truncatePagination && Array.apply(0, Array(numPages)).map((a, i: number) => {
                                if (i >= 3) return;
                                return <a
                                    key={numPages - 2 + i}
                                    href="#"
                                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                    onClick={() => changePage(numPages - 2 + i)}
                                >
                                    {numPages - 2 + i}
                                </a>
                            })
                        }
                        <a
                            href="#"
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            onClick={() => page < numPages ? changePage(page + 1) : null}
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                        <a
                            href="#"
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            onClick={() => changePage(numPages)}
                        >
                            <span className="sr-only">Last</span>
                            <ChevronDoubleRightIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

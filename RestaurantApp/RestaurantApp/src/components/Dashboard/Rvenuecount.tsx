import React from 'react'

const Rvenuecount = ({ week,month,year,day }) => {
    return (
        <body className="antialiased  font-ssans bg-white shadow rounded-xl  shadow-slate-400 p-2 ">
            <p className="text-xs md:text-sm font-medium  text-center leading-none text-gray-500 uppercase">REVENUE</p>
            <div className="mx-auto m-5 space-y-6">
                <div className="pl-1 w-auto h-20 bg-yellow-400 rounded-lg shadow-md">
                    <div className="flex w-full h-full py-2 px-4 bg-white rounded-lg justify-between">
                        <div className="my-auto">
                            <p className="font-bold">EARNINGS (DAY)</p>
                            <p className="text-lg">£{day}</p>
                        </div>
                        <div className="my-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="pl-1 w-auto h-20 bg-green-400 rounded-lg shadow-md">
                    <div className="flex w-full h-full py-2 px-4 bg-white rounded-lg justify-between">
                        <div className="my-auto">
                            <p className="font-bold">EARNINGS (WEEKLY)</p>
                            <p className="text-lg">£{week}</p>
                        </div>
                        <div className="my-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="pl-1 w-auto h-20 bg-blue-500 rounded-lg shadow-md">
                    <div className="flex w-full h-full py-2 px-4 bg-white rounded-lg justify-between">
                        <div className="my-auto">
                            <p className="font-bold">EARNINGS (MONTHLY)</p>
                            <p className="text-lg">£{month}</p>
                        </div>
                        <div className="my-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="pl-1 w-auto h-20 bg-purple-500 rounded-lg shadow-md">
                    <div className="flex w-full h-full py-2 px-4 bg-white rounded-lg justify-between">
                        <div className="my-auto">
                            <p className="font-bold">EARNINGS (ANNUAL)</p>
                            <p className="text-lg">£{year}</p>
                        </div>
                        <div className="my-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                        </div>
                    </div>
                </div>



            </div>
        </body>
    )
}

export default Rvenuecount

import React from 'react'

const Revenuecard = ({ total }) => {

    const yearlyTarget=1000

    const salesPercentage = (total / yearlyTarget) * 100;
    return (

        <div className="py-4 sm:py-6 md:py-8 bg-white shadow rounded-xl  shadow-slate-400">
            <div className=" px-5 xl:px-10 gap-y-8 gap-x-12 ">
                <div className="w-full">
                    <p className="text-xs md:text-sm font-medium leading-none text-gray-500 uppercase">Sales</p>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-3 text-gray-800 mt-3 md:mt-5">{salesPercentage}%</p>
                    <div className="flex flex-col ">
                        <div className="w-full flex justify-end">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                    <path d="M8 3.33334V12.6667" stroke="#16A34A" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 7.33334L8 3.33334" stroke="#16A34A" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4 7.33334L8 3.33334" stroke="#16A34A" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="text-xs leading-none text-green-600">4.3%</p>
                            </div>
                        </div>
                        <div className="mt-2.5">
                            <div className="w-full h-1 bg-gray-200 rounded-full">
                                <div className="w-1/2 h-1 bg-blue-500 rounded-full" />
                            </div>
                        </div>
                    </div>
                    <p className="mt-1.5 text-xs leading-3 text-gray-400">Yearly target</p>
                </div>
                <div className="w-full mt-5">
                    <p className="text-xs md:text-sm font-medium leading-none text-gray-500 uppercase">revenue</p>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-3 text-gray-800 mt-3 md:mt-5">£{total}</p>
                    <div className="flex flex-col">
                        <div className="h-4" />
                        <div className=" mt-2.5">
                            <div className="w-full h-1 bg-gray-200 rounded-full">
                                <div className="w-40 h-1 bg-lime-500 rounded-full" />
                            </div>
                        </div>
                    </div>
                    <p className="mt-1.5 text-xs leading-3 text-gray-400">Yearly target</p>
                </div>
                <div className="w-full mt-5">
                    <p className="text-xs md:text-sm font-medium leading-none text-gray-500 uppercase">customers</p>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-3 text-gray-800 mt-3 md:mt-5">3922</p>
                    <div className="flex flex-col ">
                        <div className="w-full flex justify-end">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                    <path d="M8 3.33334V12.6667" stroke="#16A34A" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 7.33334L8 3.33334" stroke="#16A34A" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4 7.33334L8 3.33334" stroke="#16A34A" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="text-xs leading-none text-green-600">9.1%</p>
                            </div>
                        </div>
                        <div className="mt-2.5">
                            <div className="w-full h-1 bg-gray-200 rounded-full">
                                <div className="w-44 h-1 bg-yellow-500 rounded-full" />
                            </div>
                        </div>
                    </div>
                    <p className="mt-1.5 text-xs leading-3 text-gray-400">Yearly target</p>
                </div>
            </div>
        </div>

    )
}

export default Revenuecard
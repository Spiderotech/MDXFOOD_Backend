

const Accountheader = () => {
    return (
        <div className="">
            <div className=" bg-gray-50  mx-auto">
                <div className="flex flex-col items-start justify-between px-4 lg:items-center lg:px-6 md:px-4 lg:flex-row md:flex-row md:items-center">
                    <div className="flex flex-col">
                        <p className="text-2xl font-semibold leading-normal text-gray-800">
                            Account
                        </p>
                        <div className="flex mt-3 gap-x-2">
                            <p className="text-xs leading-3 text-indigo-700 cursor-pointer">
                                MDX
                            </p>
                            <svg
                                className="cursor-pointer"
                                width={14}
                                height={14}
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4.10332 3.06284L8.04082 7.00034L4.10332 10.9378L5.03139 11.8659L9.89697 7.00034L5.03139 2.13477L4.10332 3.06284Z"
                                    fill="#4338CA"
                                />
                            </svg>
                            <p className="text-xs leading-3 text-indigo-700 cursor-pointer">
                                Account
                            </p>

                        </div>
                    </div>

                </div>
                <hr className="my-4 border-gray-300" />
                <div className="flex flex-col px-4 lg:px-6 md:px-4 gap-x-5 lg:flex-row md:flex-row gap-y-4">
                    <ul className="hidden lg:flex items-center lg:mt-6 xl:mt-0">
                        <a href='/accounts'>
                            <li className="cursor-pointer font-normal flex justify-center items-center py-2 px-4 rounded mr-4 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-4 hover:bg-gray-200 text-gray-500 dark:hover:bg-gray-700 dark:text-gray-400 text-md">Profile</li>

                        </a>

                        <a href='/accounts/foods'>
                        <li className="cursor-pointer font-normal flex justify-center items-center py-2 px-4 rounded mr-4 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-4 hover:bg-gray-200 text-gray-500 dark:hover:bg-gray-700 dark:text-gray-400 text-md">Food items</li>

                        </a>
                        <a href='/accounts/foods-form'>
                        <li className="cursor-pointer font-normal flex justify-center items-center py-2 px-4 rounded mr-4 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-4 hover:bg-gray-200 text-gray-500 dark:hover:bg-gray-700 dark:text-gray-400 text-md"> Add Food items</li>

                        </a>

                        
                      
                    </ul>

                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Accountheader
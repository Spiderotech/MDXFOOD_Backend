import React from 'react'
import { useNavigate } from "react-router-dom";
import axios from "../../utils/restaurant/axios"

const Fooditemcard = ({ company }) => {
    const navigate = useNavigate();

    const handleRemove = () => {
        const id=company._id

       axios.post("/deletefood?id="+ id).then(response => {
        if (response.data.status === true) {

            window.location.reload();
        }
            })
            .catch(error => {
                console.error('Error removing food item:', error);
            });
    };
    return (
        <div>
            <section className="container  p-10  ">
                <article className=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto  group cursor-pointer transform duration-500 hover:-translate-y-1">
                    <img className="w-full max-h-[360px] object-cover md:w-72" src={company?.image} alt="" />
                    <div className=" w-full">
                        <div className="p-10 w-full ">
                            <h1 className="text-2xl font-semibold text-gray-800 mt-4">
                                {company?.name}
                            </h1>
                            <p className="text-xl text-gray-400 mt-2 leading-relaxed">
                                {company?.description}
                            </p>
                            <div className="text-lg text-gray-700">
                                <span className="text-gray-900 font-bold">Preparation Time</span>{company?.preparationTime}
                            </div>
                        </div>
                        <div className="bg-blue-50 p-5 w-full">
                            <div className="sm:flex sm:justify-between">
                                <div>
                                    <div className="text-lg text-gray-700">
                                        <span className="text-gray-900 font-bold">Price</span>  {company?.price} 
                                    </div>
                                    <div className="flex items-center">

                                        <div className="text-gray-600  text-md md:text-xl mt-1">
                                            Extra items
                                        </div>
                                    </div>
                                </div>
                                <div className='gap-5'>
                                <button
                                    className="mt-3  sm:mt-0 py-2 px-3 md:py-2 md:px-5 bg-purple-700 hover:bg-purple-600 font-bold text-white md:text-md rounded-lg shadow-md"
                                    onClick={() => navigate(`/accounts/foods-edit/${company?._id}`)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="mt-3 ml-5 sm:mt-0 py-2 px-3 md:py-2 md:px-5 bg-red-700 hover:bg-red-600 font-bold text-white md:text-md rounded-lg shadow-md"
                                    onClick={handleRemove}
                                >
                                    Remove
                                </button>

                                </div>
                                
                                

                            </div>

                            {company?.extraItems.map((item, index) => (
                                <div key={index} className="mt-1 text-gray-600 text-sm md:text-sm flex flex-row">
                                    <h1 className="text-md font-semibold text-gray-800 mt-1">
                                        {item.name}
                                    </h1>
                                    <div className="text-lg text-gray-700 ml-3">
                                        <span className="text-gray-900">{item.price}</span>
                                    </div>
                                </div>
                            ))}


                        </div>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default Fooditemcard
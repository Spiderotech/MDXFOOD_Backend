import React from 'react'
import axios from "../../utils/orders/axios"

const Newordercard = ({ order }) => {

    const handleAcceptOrder = (orderId: string) => {
        axios.post("/confirmorder?id=" + orderId)
            .then((response) => {
                console.log(response.data);
                if (response.data.status === true) {

                    window.location.reload();
                }
            })
            .catch((error) => {
                console.error(error.message);
            });
    };

    const handleCancelOrder = (orderId: string) => {
        axios.post("/cancelorder?id=" + orderId)
            .then((response) => {
                console.log(response.data);
                if (response.data.status === true) {

                    window.location.reload();
                }
            })
            .catch((error) => {
                console.error(error.message);
            });
    };
    return (


        <div className="w-full mt-10 text-center bg-white border flex flex-col border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ">
            <div className='w-full h-auto  flex flex-row gap-10 border-b-2 border-gray grid-flow-row  '>
                <div className='flex flex-col p-3'>
                    <p className="text-sm font-semibold leading-normal text-gray-800">
                        Ordernumber
                    </p>
                    <p className="text-md  font-bold leading-normal text-gray-800">
                        {order.orderId}
                    </p>

                </div>
                <div className='flex flex-col p-3 text-start '>
                    <p className="text-sm font-semibold leading-normal text-gray-800">
                        Date&Time
                    </p>
                    <p className="text-md  font-bold leading-normal text-gray-800">
                        {new Date(order.createdAt).toLocaleString()}
                    </p>

                </div>
                <div className='flex flex-col p-3 text-start'>
                    <p className="text-sm font-semibold leading-normal text-gray-800">
                        Name
                    </p>
                    <p className="text-md  font-bold leading-normal text-gray-800">
                        {order.userId.name}
                    </p>

                </div>
                <div className='flex flex-col p-3 text-start'>
                    <p className="text-sm font-semibold leading-normal text-gray-800">
                        Contact
                    </p>
                    <p className="text-md  font-bold leading-normal text-gray-800">
                        {order.userId.email}
                    </p>

                </div>
                <div className='flex flex-col p-3'>
                    <p className="text-sm font-semibold leading-normal text-gray-800">
                        Amount
                    </p>
                    <p className="text-md  font-bold leading-normal text-gray-800">
                        {order.totalPrice}
                    </p>

                </div>

                <div className='flex flex-col p-3'>
                    <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"onClick={() => handleCancelOrder(order._id)}>Reject Order</button>

                </div>


            </div>
            <div className='w-full h-auto  flex flex-row gap-10   mt-5  '>
                <div className='flex flex-col p-3'>
                    <p className="text-sm font-semibold leading-normal text-gray-800">
                        Ordered items
                    </p>

                </div>
                {order.items.map((item, index) => (
                    <div className='w-auto  flex justify-center items-center  bg-slate-300 m-2 rounded-md'>
                        <p className="text-[12px] font-semibold leading-normal text-gray-800 p-2">
                            {item.name}  X  {item.quantity}
                        </p>

                    </div>

                ))}

            </div>
            <div className='w-full h-auto  flex flex-row justify-between gap-10  mt-5  '>
                <div>

                </div>

                <div>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => handleAcceptOrder(order._id)}>Accept order</button>

                </div>



            </div>


        </div>

    )
}

export default Newordercard
import React, { useEffect, useState } from 'react'
import Revenuecard from './Dashboard/Revenuecard'
import DonutChart from './Dashboard/DonutChart'
import Cards from './Dashboard/Cards'
import Rvenuecount from './Dashboard/Rvenuecount'
import axios from "../utils/orders/axios"
import { useSelector } from 'react-redux';

type RootState = {
    admin: {
        value: {
            id: string | null;
            email: string | null;
          
        };
    };
};


const Dashboard = () => {
    const admindata = useSelector((state: RootState) => state.admin.value);
    const [ordercount, setordercount] = useState<any>(null);
    const [pendingordercount, setpendingordercount] = useState<any>(null);
    const [ongoingordercount, setongoingordercount] = useState<any>(null);
    const [cancelordercount, setcancelordercount] = useState<any>(null);
    const [completeordercount, setcompleteordercount] = useState<any>(null);
    const [totalrevenue, settotalrevenue] = useState<any>(null);
    const [totalweeklyrevenue, settotalweeklyrevenue] = useState<any>(null);
    const [totalmonthlyrevenue, settotalmonthlyrevenue] = useState<any>(null);
    const [totalyearlyrevenue, settotalyearlyrevenue] = useState<any>(null);
    const [totaldayrevenue, settotaldayrevenue] = useState<any>(null);
    const [totaluser, settotaluser] = useState<any>(null);
    const id = admindata.id;

    useEffect(() => {
        axios.get("/allordercount?id=" + id)
            .then((response) => {
                console.log(response.data.orderdata);
                setordercount(response.data.orderdata);
            })
            .catch((error) => {
                console.error(error.message);
            });

        axios.get("/pendingordercount?id=" + id)
            .then((response) => {
                console.log(response.data.orderdata);
                setpendingordercount(response.data.orderdata);
            })
            .catch((error) => {
                console.error(error.message);
            });

            axios.get("/ongoingordercount?id=" + id)
            .then((response) => {
                console.log(response.data.orderdata);
                setongoingordercount(response.data.orderdata);
            })
            .catch((error) => {
                console.error(error.message);
            });

            axios.get("/cancelordercount?id=" + id)
            .then((response) => {
                console.log(response.data.orderdata);
                setcancelordercount(response.data.orderdata);
            })
            .catch((error) => {
                console.error(error.message);
            });

            axios.get("/completeordercount?id=" + id)
            .then((response) => {
                console.log(response.data.orderdata);
                setcompleteordercount(response.data.orderdata);
            })
            .catch((error) => {
                console.error(error.message);
            });

            axios.get("/totalrevenue?id=" + id)
            .then((response) => {
                console.log(response.data.orderdata);
                settotalrevenue(response.data.orderdata);
            })
            .catch((error) => {
                console.error(error.message);
            });


            axios.get("/weeklyrevenue?id=" + id)
            .then((response) => {
                console.log(response.data.orderdata);
                settotalweeklyrevenue(response.data.orderdata);
            })
            .catch((error) => {
                console.error(error.message);
            });

            axios.get("/monthlyrevenue?id=" + id)
            .then((response) => {
                console.log(response.data.orderdata);
                settotalmonthlyrevenue(response.data.orderdata);
            })
            .catch((error) => {
                console.error(error.message);
            });

            axios.get("/yearlyrevenue?id=" + id)
            .then((response) => {
                console.log(response.data.orderdata);
                settotalyearlyrevenue(response.data.orderdata);
            })
            .catch((error) => {
                console.error(error.message);
            });


            axios.get("/dayrevenue?id=" + id)
            .then((response) => {
                console.log(response.data.orderdata);
                settotaldayrevenue(response.data.orderdata);
            })
            .catch((error) => {
                console.error(error.message);
            });


            axios.get("/totalusers?id=" + id)
            .then((response) => {
                console.log(response.data.orderdata);
                settotaluser(response.data.orderdata);
            })
            .catch((error) => {
                console.error(error.message);
            });
    
       
    
    }, [id]); 
    
    


    return (
        <>
            <div className="">
                <div className=" bg-white mx-auto">
                    <div className="flex flex-col items-start justify-between px-4 lg:items-center lg:px-6 md:px-4 lg:flex-row md:flex-row md:items-center">
                        <div className="flex flex-col">
                            <p className="text-2xl font-semibold leading-normal text-gray-800">
                                Dashboard
                            </p>
                            
                        </div>

                    </div>
                    <hr className="my-4 border-gray-300" />
                    <div className="flex flex-col px-4 lg:px-6 md:px-4 gap-x-5 lg:flex-row md:flex-row gap-y-4">

                    </div>
                </div>
                <div></div>
            </div>
            <Cards orderCount={ordercount}  pendingorderCount={pendingordercount}  confirmorderCount={ongoingordercount} cancelorderCount={cancelordercount} total={totalrevenue} orders={completeordercount}/>

            <div className='grid md:grid-cols-1 xl:grid-cols-3 gap-6 mt-10'>
                <Revenuecard total={totalrevenue}/>
                <DonutChart orderCount={completeordercount}  pendingorderCount={pendingordercount}  confirmorderCount={ongoingordercount} cancelorderCount={cancelordercount} />
                <Rvenuecount week={totalweeklyrevenue} month={totalmonthlyrevenue} year={totalyearlyrevenue} day={totaldayrevenue}/>




            </div>






        </>
    )
}

export default Dashboard
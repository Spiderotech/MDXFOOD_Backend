import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Profilepage from '../components/Account/Profilepage';
import Fooditempage from '../components/Account/Fooditempage';
import Itemaddform from '../components/Account/Itemaddform';
import {Routes, Route } from "react-router-dom";
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

const Accountpage = () => {
    const admindata = useSelector((state: RootState) => state.admin.value);
    const [ordercount, setordercount] = useState<any>(null);
    const [totalrevenue, settotalrevenue] = useState<any>(null);
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

            axios.get("/totalrevenue?id=" + id)
            .then((response) => {
                console.log(response.data.orderdata);
                settotalrevenue(response.data.orderdata);
            })
            .catch((error) => {
                console.error(error.message);
            });
  
    
    }, [id]); 
    return (
        <Layout>
            <Profilepage orderCount={ordercount} total={totalrevenue} />
            <Routes>
                <Route path="/accounts/profile" element={<Profilepage orderCount={ordercount} total={totalrevenue}/>} />
                <Route path="/accounts/foods" element={<Fooditempage />} />
                <Route path="/accounts/foods-form" element={<Itemaddform />} />
            </Routes>
        </Layout>
    );
}

export default Accountpage;

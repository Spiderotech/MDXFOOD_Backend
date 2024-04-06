import Dashboardpage from "./pages/Dashboardpage"
import Accountpage from "./pages/Accountpage"
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import Foodaddingpage from "./pages/Foodaddingpage";
import Foodpage from "./pages/Foodpage";
import Foodeditingpage from "./pages/Foodeditingpage";
import Orderspage from "./pages/Orderspage";
import Ongoingorderpage from "./pages/Ongoingorderpage";
import Completeorderpage from "./pages/Completeorderpage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Socket, io } from "socket.io-client"
import { useEffect, useRef, useState } from "react";
import { useSelector } from 'react-redux';
import Nottification from "./components/Nottification";

type RootState = {
  admin: {
    value: {
      id: string | null;
      email: string | null;

    };
  };
};

function App() {
  const admindata = useSelector((state: RootState) => state.admin.value);
  const Id = admindata?.id;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/dashbord" element={<Dashboardpage  />} />
        <Route path="/accounts" element={<Accountpage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/accounts/foods" element={<Foodpage />} />
        <Route path="/accounts/foods-form" element={<Foodaddingpage />} />
        <Route path="/accounts/foods-edit/:Id" element={<Foodeditingpage />} />
        <Route path="/orders" element={<Orderspage />} />
        <Route path="/orders/ongoing-orders" element={<Ongoingorderpage />} />
        <Route path="/orders/completed-orders" element={<Completeorderpage />} />

      </Routes>
      <Nottification/>
    </BrowserRouter>
  )
}

export default App


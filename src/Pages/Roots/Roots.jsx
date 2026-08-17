// import React from 'react';

import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Roots = () => {
    return (
        <div>
            <Header></Header>
            {/* This will be render with routes! */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div> 
    );
};

export default Roots;
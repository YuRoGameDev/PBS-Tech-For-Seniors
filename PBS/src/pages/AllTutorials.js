import React from 'react';
import { Link, Outlet } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

//Change this to page name
const AllTutorials = () => {
    return (
        <div>
            <Outlet />
            {/* Put page title here */}
            <Header pageTitle={"All Tutorials"} />

            <div className="content">
                <div className="button-container button-scroll">
                    <Link to="/scams/scam1" className="button">What is a Scam</Link>
                    <Link to="/scams/scam2" className="button">Different Types of Scams</Link>
                    <Link to="/scams/scam3" className="button">Protecting your Personal Data</Link>
                    
                </div>
                {/* Render nested route components here */}

                <Footer onBackClick="/" />
            </div>

        </div>
    )
};

//Change this to File name
export default AllTutorials;
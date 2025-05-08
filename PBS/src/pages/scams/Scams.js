import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const Scams = () => {
  return (
    <div>
      <Outlet />
      <Header pageTitle={"How To Avoid Scams"} />
      
      <div className="content">
        <div className="button-container button-scroll">
          <Link to="/scams/scam1" className="button">What is a Scam</Link>
          <Link to="/scams/scam2" className="button">Different Types of Scams</Link>
          <Link to="/scams/scam3" className="button">Protecting your Personal Data</Link>
          <Link to="/scams/scam4" className="button">Responding to Scams</Link>
          <Link to="/scams/scam5" className="button">Cybersecurity Basics for Avoiding Scams</Link>
          <Link to="/scams/scam6" className="button">Phone Call Scams</Link>
        </div>
        {/* Render nested route components here */}
        
        <Footer onBackClick="/" />
      </div>
    </div>
  );
};

export default Scams;

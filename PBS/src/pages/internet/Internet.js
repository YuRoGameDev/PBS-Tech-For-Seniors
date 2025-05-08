import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const Internet = () => {
  return (
    <div>
      <Outlet />
      <Header pageTitle={"Internet Tutorials"} />

      <div className="content">
        <div className="button-container button-scroll">
          <Link to="/internet/internet1" className="button">How to Detect AI</Link>
          <Link to="/internet/internet2" className="button">How to Spot Fraudulent Websites</Link>
          <Link to="/internet/internet3" className="button">How to Navigate Email</Link>
          <Link to="/internet/internet4" className="button">Connect to Internet & Hotspot</Link>
          <Link to="/internet/internet5" className="button">Shopping Safely Online</Link>
          <Link to="/internet/internet6" className="button">Understanding Passwords and Online Security</Link>
        </div>
        {/* Render nested route components here */}

        <Footer onBackClick="/" />
      </div>
    </div>
  )
};

export default Internet;
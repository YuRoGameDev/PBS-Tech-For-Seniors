import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const Phone = () => {
  return( 
    <div>
      <Outlet />
      <Header pageTitle={"Phone Tutorials"} />
      
      <div className="content">
        <div className="button-container button-scroll">
          <Link to="/phone/phone1" className="button">Block a Phone Number</Link>
          <Link to="/phone/phone2" className="button">Download an App</Link>
          <Link to="/phone/phone3" className="button">Take a Photo/Basic Camera Roll Functions
          </Link>
          <Link to="/phone/phone4" className="button">Understanding Phone Settings</Link>
          <Link to="/phone/phone5" className="button">Updating Apps and Software</Link>
          <Link to="/phone/phone6" className="button">Using Health Tracking Apps</Link>
        </div>
        {/* Render nested route components here */}
        
        <Footer onBackClick="/" />
      </div>
    </div>
    
   
  )
  };
  
  export default Phone;
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

//#region Import Other Pages
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Suggestion from "./pages/Suggestion";
import AllTutorials from "./pages/AllTutorials"
import Result from './pages/Result.jsx';
//#endregion

//#region  Internet Import
import Internet from "./pages/internet/Internet.js";
import Internet1 from './pages/internet/Internet1.js';
import Internet2 from './pages/internet/Internet2.js';
import Internet3 from './pages/internet/Internet3.js';
import Internet4 from './pages/internet/Internet4.js';
import Internet5 from './pages/internet/Internet5.js';
import Internet6 from './pages/internet/Internet6.js';
//#endregion

//#region  Phone Import
import Phone from "./pages/phone/Phone.js";
import Phone1 from './pages/phone/Phone1.js';
import Phone2 from './pages/phone/Phone2.js';
import Phone3 from './pages/phone/Phone3.js';
import Phone4 from './pages/phone/Phone4.js';
import Phone5 from './pages/phone/Phone5.js';
import Phone6 from './pages/phone/Phone6.js';
//#endregion

//#region Scam Import
import Scams from "./pages/scams/Scams";
import Scam1 from "./pages/scams/Scam1";
import Scam2 from "./pages/scams/Scam2";
import Scam3 from "./pages/scams/Scam3";
import Scam4 from './pages/scams/Scam4.js';
import Scam5 from './pages/scams/Scam5.js';
import Scam6 from './pages/scams/Scam6.js';
//#endregion

//#region Searchbar
import axios from 'axios';
import { useState } from 'react';
//#endregion

//#region FireBase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
//#endregion


export default function App() {
  const [result, setResult] = useState(null);


  return (
    <>
      <BrowserRouter>
        {result && <Result {...result} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="suggestion" element={<Suggestion />} />
          <Route path="alltutorials" element={<AllTutorials />} />

          {/* Scams */}
          <Route path="scams" element={<Scams />} />
          <Route path="scams/scam1" element={<Scam1 />} />
          <Route path="scams/scam2" element={<Scam2 />} />
          <Route path="scams/scam3" element={<Scam3 />} />
          <Route path="scams/scam4" element={<Scam4 />} />
          <Route path="scams/scam5" element={<Scam5 />} />
          <Route path="scams/scam6" element={<Scam6 />} />

          {/* Internet */}
          <Route path="internet" element={<Internet />} />
          <Route path="internet/internet1" element={<Internet1 />} />
          <Route path="internet/internet2" element={<Internet2 />} />
          <Route path="internet/internet3" element={<Internet3 />} />
          <Route path="internet/internet4" element={<Internet4 />} />
          <Route path="internet/internet5" element={<Internet5 />} />
          <Route path="internet/internet6" element={<Internet6 />} />

          {/* Phone */}
          <Route path="phone" element={<Phone />} />
          <Route path="phone/phone1" element={<Phone1 />} />
          <Route path="phone/phone2" element={<Phone2 />} />
          <Route path="phone/phone3" element={<Phone3 />} />
          <Route path="phone/phone4" element={<Phone4 />} />
          <Route path="phone/phone5" element={<Phone5 />} />
          <Route path="phone/phone6" element={<Phone6 />} />

          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>

    </>

  );


};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
reportWebVitals();

import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import SearchBar from '../pages/SearchBar';

//#region Searchbar
import axios from 'axios';
import { useState } from 'react';

const fetchData = async (value) => {
  const { data } = await axios.get(
    `https://dummyjson.com/products/search?q=${value}&limit=10` 
  );

  /*const dbRef = ref(database, 'products');
  const searchQuery = query(
  dbRef,
  orderByChild('title'),
  startAt(value),
  endAt(value + "\uf8ff") // To ensure the query is inclusive for matching values
  );*/
}
const Home = () => {
  const [result, setResult] = useState(null);

  return (
    <body>

      <Header pageTitle={"PBS Tech for Seniors"} />

      <div className="content">
        <h2>What can we help you with today?</h2>
        <div className="search-bar">
          <SearchBar
          fetchData={fetchData}
          setResult={setResult}
          suggestionKey="title"
        />
        </div>
        <hr className="divider" />
        <div className="button-container">
           <Link to="/alltutorials" button className="Home-button large">all tutorials</Link>
          <div className="small-buttons">
            <Link to="/phone" button className="Home-button">Phone</Link>
            <Link to="/internet" button className="Home-button">Internet</Link>
            <Link to="/scams" button className="Home-button">Scams</Link>
          </div>
          <Link to="/suggestion" button className="Home-button large">Feedback / Call a Represenative</Link>   
        </div>
      </div>

      <Footer
      onBackClick={'/'}
      />
    </body>
  )
};

export default Home;
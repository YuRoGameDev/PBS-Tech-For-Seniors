import React from 'react';
import { useState } from 'react';
import styles from './SearchBar.module.css';
import { useDebounce } from '../hooks/useDebounce';


const SearchBar = ({ fetchData, setResult, suggestionKey }) => {
  const [value, setValue] = useState(''); // Here we'll store the value of the search bar's text input
  const [suggestions, setSuggestions] = useState([]); // This is where we'll store the retrieved suggestions
  const [hideSuggestions, setHideSuggestions] = useState(true);

  const findResult = (value) => {
    setResult(suggestions.find((suggestion) => suggestion[suggestionKey] === value));
  };

  useDebounce(
    async () => {
      try {
        const suggestions = await fetchData(value);

        setSuggestions(suggestions || []);
      } catch (error) {
        console.log(error);
      }

    },
    1000,
    [value]
  );

  const handleFocus = () => {
    setHideSuggestions(false)
  };

  const handleBlur = () => {
    setTimeout(() => {
      setHideSuggestions(true);
    }, 200);
  };

  const handleSearchInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className={styles['container']}>
        <input
          onFocus={handleFocus}
          onBlur={handleBlur}
          type="search"
          className={styles['textbox']}
          placeholder="Search data..."
          value={value}
          onChange={handleSearchInputChange}
        />
        <div
          className={`${styles.suggestions} ${
            hideSuggestions && styles.hidden
          }`}
        >
          {suggestions.map((suggestion) => (
            <div
              className={styles.suggestion}
              onClick={() => findResult(suggestion[suggestionKey])}
            >
              {suggestion[suggestionKey]}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
import React, { useState } from 'react';
import style from "./GenericSearch.module.css";

const GenericSearch = ({ onSearch, setSearching, place = 'Search by name...', className }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const customClass = className ? className : style.search;

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      onSearch(searchTerm);
      setSearching=true
      setSearchTerm("");
    }else{
      setSearching=false
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
      
    }
  };



  return (
    <div className={customClass}>
      <input
        type="search"
        placeholder={place}
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        onKeyDown={handleKeyPress}
        className={customClass}
      />
      <button onClick={handleSearch} className={customClass} >Search</button>
    </div>
  );
};

export default GenericSearch;

import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux";
import {userBynumId} from '../../../../redux/actions'
import style from "./GenericSearch.module.css";

const UserSearch = ({  direction, place = 'Search by name...', className }) => {
  const dispatch = useDispatch()
  const navigate= useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const customClass = className ? className : style.search;
 
  const handleSearch =  () => {
    if (searchTerm.trim() !== '') {
      try {
       dispatch(userBynumId(searchTerm));
       
       navigate(`/${direction}/${searchTerm}`);
       setSearchTerm("");
      } catch (error) {
       alert('Algo anda mal')
       console.log('algo anda mal en la search')
      }
      
    }else{
      navigate(`/admin`);
      
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

export default UserSearch;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.scss";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";

const Header = () => {
  const [term, setTerm] = useState(""); // Initialize state with an empty string
  const dispatch = useDispatch(); 

  const submitHandler = (e) => {
    e.preventDefault();
    if(term === ""){
     return alert("please Enter");
    }
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm(""); 
  }

  const handleInputChange = (e) => {
    setTerm(e.target.value);
  }

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          Movie App
        </Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          {/* Set value and onChange for controlled input */}
          <input type="text" placeholder="Search Movies or Shows" onChange={handleInputChange} value={term} />
          <button type="submit"><i className="fa fa-search"></i></button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
  
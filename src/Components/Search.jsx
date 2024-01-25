import React from "react";

const Search = () => {
  return (
    <div className="relative">
      <input className="search" type="text" placeholder="Search here..." />
      <div className="search-icons">
        <img
          className="h-5 w-5"
          src="./icons/search.svg"
          alt="Search Icon"
        />
      </div>
    </div>
  );
};

export default Search;

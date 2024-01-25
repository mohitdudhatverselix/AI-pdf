import React from "react";
import AI_Title from  "./AI_Title";
import More from './More';
import Options from "./Options";
import Category from "./Category";
import Categories from "./Categories";
import {trending_data as data} from ".";
const Screen10 = () => {
  return (
    <>
     <img
      src="./icons/Ellipse 8.svg"
      alt=""
      srcSet=""
      className="absolute top-2/4 translate-y-[-50%] z-[-100]"
    />
      <div className="app-container">
      <div className="search-box relative">
          <input
            className="search pl-[50px] pr-4 py-2 border w-full"
            type="text"
            placeholder="Search here..."
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <img
      className="h-[20px] w-[20px]"
      src="./icons/search.svg"
      alt="Search Icon"
    />
  </div>
        </div>
        <More desc={{title: "Recent Search"}}/>
        <Options data={data}/>
      </div>
    </>
  );
};

export default Screen10;

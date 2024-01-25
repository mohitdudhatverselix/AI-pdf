import React from "react";
import AI_Title from  "./AI_Title";
import More from './More';
import Options from "./Options";
import Search from './Search';
import {trending_data as data } from ".";
import Categories from "./Categories";

const Screen1:React.FC = () => {
  return (
    <>
      <div className="app-container">
        <AI_Title/>
        <Search/>
        <More desc={{title: "TRENDING",img : "./icons/more.svg"}}/>
        <Options data={data} key={1}/>
        <More desc={{title: "CATEGORIES",img : "./icons/menu.svg",route:"/screen3"}}/>
        <Categories/>
        <More desc={{title: "RECENT FILES",img : "./icons/more.svg"}}/>
        <Options data={data} key={2}/>
      </div> 
    </>
  );
};

export default Screen1;

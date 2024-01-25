import React from "react";
import AI_Title from  "./AI_Title";
import More from './More';
import Options from "./Options";
import Category from "./Category";
import Categories from "./Categories";
import Search from './Search';
const data = [
  {
    title: "Crop PDF",
    img: "./icons/trending-1.svg",
    route: "/screen5"
  },
  {
    title: "Convert File Into PDF",
    img: "./icons/trending-2.svg",
    route: "/screen9"
  }
]
const Screen1 = () => {
  return (
    <>
      <div className="app-container">
        <AI_Title/>
        <Search/>
        <More desc={{title: "TRENDING",img : "./icons/more.svg"}}/>
        <Options data={data} id={1}/>
        <More desc={{title: "CATEGORIES",img : "./icons/menu.svg",route:"/screen3"}}/>
        <Categories/>
        <More desc={{title: "RECENT FILES",img : "./icons/more.svg"}}/>
        <Options data={data} id={2}/>
      </div>
    </>
  );
};

export default Screen1;

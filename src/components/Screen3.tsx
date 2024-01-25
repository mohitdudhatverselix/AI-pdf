import React from "react";
import AI_Title from "./AI_Title";
import More from "./More";
import Options from "./Options";
import Categories_col from "./Categories_col";
import Search from "./Search";
import { categories_data as category, trending_data as data } from ".";


const Screen3: React.FC = () => {  
    return (
    <div className="app-container">
      <AI_Title />
      <Search />
      <More desc={{ title: "TRENDING", img: "./icons/more.svg" }} />
      <Options data={data} />
      <More
        desc={{
          title: "CATEGORIES",
          img: "./icons/4 dots.svg",
          route: "/screen1",
        }}
      />
      <Categories_col data={category} />
      <More desc={{ title: "TRENDING", img: "./icons/more.svg" }} />
      <Options data={data} />
    </div>
  );
};

export default Screen3;

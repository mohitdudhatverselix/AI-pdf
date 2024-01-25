import React from "react";
import AI_Title from "./AI_Title";
import More from "./More";
import Options from "./Options";
import Categories_col from "./Categories_col";
import Category_col from "./Category_col";
import Box from "./Box";
import Search from "./Search";
import * as Item from "./index";
import { categories_data as category, trending_data as data, boxOption } from ".";

const Screen4:React.FC = () => {
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
      <Category_col
        desc={{
          title: "PDF Multi Tool",
          img: "./icons/c-1.svg",
          route: "/screen3",
        }}
      />
      <Box data={boxOption} />
      <Categories_col data={category} />
      <More desc={{ title: "TRENDING", img: "./icons/more.svg" }} />
      <Options data={data} />
    </div>
  );
};

export default Screen4;

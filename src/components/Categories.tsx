import React from "react";
import {categories_data as data} from "./";
import Category from "./Category";

const Categories: React.FC = () => {
  return (
    <div className="categories">
      {data.map((item, index) => {
        return <Category desc={item} key={index} />;
      })}
    </div>
  );
};

export default Categories;

import React from "react";
import { Link } from "react-router-dom";
import {Item} from "./";

const Category_col:React.FC<{desc:Item}> = ({ desc }) => {
  return (
    <Link className="flex w-full justify-between my-[10px] items-center rounded-[20px] cmp-bg p-[10px]" to={desc.route  || ""}>
      <div className="flex items-center ">
        <div className="icon-box ">
          <img src={desc.img} />
        </div>
        <h3 className="pl-[15px] box-title flex items-center">{desc.title}</h3>
      </div>
      <div className="icon-box">
        <img src="/icons/down.svg" />
      </div>

    </Link>
  );
};

export default Category_col;

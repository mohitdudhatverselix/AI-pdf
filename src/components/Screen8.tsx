import React from "react";
import Back from "./Back";
import {setting as data} from ".";
import Option from "./Option";
import { ModeToggle } from "./mode-toggle";

const Screen8:React.FC = () => {
  return (
    <div>
      <img
        src="./icons/Ellipse 8.svg"
        alt=""
        srcSet=""
        className="absolute dark-none top-2/4 translate-y-[-50%] z-[-100]"
      />
      <div className="app-container">
        <Back desc={{ img: "./icons/left.svg" }} />
        <div className="ai-logo center flex-col">
          <img src="./icons/AI.svg" alt="" srcSet="" />
          <h2 className="black text-[25px] font-extrabold leading-[123.529%] tracking-[0.5px] mt-[20px] font-[Newsreader]">
            AI PDF
          </h2>
        </div>
        <div className="mt-[50px]">
          {data.map((item, i) => {
            if (i === 3) {
              return (
                <React.Fragment key={i}>
                  <hr className="h-[2.5px] my-8 bg-white border-0 white:bg-gray-700" />
                  <Option data={item} key={i} />
                </React.Fragment>
              );
            }
            return <Option data={item} key={i} />;
          })}
        </div>
      </div>
      <div className="app-container flex justify-center">
        <ModeToggle />

      </div>

    </div>
  );
};
export default Screen8;

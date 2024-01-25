import React from "react";
import Option from "./Option";
import Back from "./Back";

const data = [
  { title: "All files", img: "./icons/ai-1.svg",route:'/screen9' },
  { title: "Bookmarks", img: "./icons/ai-2.svg" },
  { title: "App Language", img: "./icons/ai-3.svg" ,route:'/screen6'},
  { title: "Share", img: "./icons/ai-4.svg" },
  { title: "Rate Us", img: "./icons/ai-5.svg" },
  { title: "Privacy Policy", img: "./icons/ai-6.svg" },
];

const Screen8 = () => {
  return (
    <div>
      <img
        src="./icons/Ellipse 8.svg"
        alt=""
        srcset=""
        className="absolute top-2/4 translate-y-[-50%] z-[-100]"
      />
      <div className="app-container">
        <Back desc={{ img: "./icons/left.svg" }} />
        <div className="ai-logo center flex-col">
          <img src="./icons/AI.svg" alt="" srcset="" />
          <h2 className="black text-[25px] font-extrabold leading-[123.529%] tracking-[0.5px] mt-[20px] font-[Newsreader]">
            AI PDF
          </h2>
        </div>
        <div className="mt-[50px]">
          {data.map((item, i) => {
            if (i === 3) {
              return (
                <>
                  <hr className="h-[2.5px] my-8 bg-white border-0 white:bg-gray-700" />
                  <Option data={item} key={i} />
                </>
              );
            }
            return <Option data={item} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Screen8;

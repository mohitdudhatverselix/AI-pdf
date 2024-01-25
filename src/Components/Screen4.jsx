import React from 'react'
import AI_Title from './AI_Title'
import More from './More';
import Options from './Options';
import Categories_col from './Categories_col';
import Category_col from './Category_col';
import Box from './Box';
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
    route: "/screen7"
  }
]
const category = [
{
  title:"Page Operations",
  img:"./icons/c-2.svg",
  route: "/screen7"
}
,{
  title:"Convert",
  img:"./icons/c-3.svg",
  route: "/screen7"
},{
  title:"PDF Protection",
  img:"./icons/c-4.svg",
  route: "/screen7"
},
,{
  title:"Miscellaneous",
  img:"./icons/c-5.svg",
  route: "/screen7"
}
]
const boxOption =[
  {
    title: "Crop PDF",
    img: "./icons/oi-1.svg",
  },
  {
    title: "Rotate Page",
    img: "./icons/oi-2.svg",
  },
  {
    title: "Overlays PDFs",
    img: "./icons/oi-3.svg",
  }
  ,
  {
    title: "Split",
    img: "./icons/oi-4.svg",
  }
]
const Screen4 = () => {
  return (
    <div className="app-container">
        <AI_Title/>
        <Search/>
        <More  desc={{title: "TRENDING",img : "./icons/more.svg"}}/>
        <Options data = {data}/>
        <More desc={{title: "CATEGORIES",img : "./icons/4 dots.svg",route:"/screen1"}}/>
        <Category_col desc={{title:"PDF Multi Tool", img:"./icons/c-1.svg",route:"/screen3"}}/>
        <Box data = {boxOption}/>
        <Categories_col data={category}/>
        <More desc={{title: "TRENDING",img : "./icons/more.svg"}}/>
        <Options data={data}/>
    </div>
    )
}

export default Screen4
import React from 'react'
import Category from './Category';

const data = [{
    title:"PDF Multi Tool",
    img:"./icons/c-1.svg",
    route:"/screen7"
},
{
    title:"Page Operations",
    img:"./icons/c-2.svg",
    route:"/screen7"
}
,{
    title:"Convert",
    img:"./icons/c-3.svg",
    route:"/screen7"
},{
    title:"PDF Protection",
    img:"./icons/c-4.svg",
    route:"/screen7"
},
,{
    title:"Miscellaneous",
    img:"./icons/c-5.svg",
    route:"/screen7"
}
]
const Categories = () => {
  return (
        <div className="categories">
          {
            data.map((item,index) => {
              return <Category desc={item} key={index}/>
            })
          }
        </div>
  )
}

export default Categories
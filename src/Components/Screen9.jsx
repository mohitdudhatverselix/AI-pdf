import React from 'react'
import Option from './Option'
import Back from './Back'

const data = [{ title: "All files On Your Devise", img: "./icons/ai-1.svg" },
{ title: "Recently Edited Files", img: "./icons/ai-1.svg" },
]
const Screen9 = () => {
  return (
    <div>
    <img
      src="./icons/Ellipse 8.svg"
      alt=""
      srcset=""
      className="absolute top-2/4 translate-y-[-50%] z-[-100]"
    />
    <div className="app-container">
      <Back desc={{img:"./icons/left.svg",title:"All PDF"}}/>
      <div className="mt-[50px]">
        {data.map((item, i) => {
          return <Option data={item} key={i} />;
        })}
      </div>
    </div>
    </div>
  )
}

export default Screen9
import React from 'react'
import Option from './Option'
import Back from './Back'
import {pdf as data} from '.';

const Screen9:React.FC = () => {
  return (
    <div>
    <img
      src="./icons/Ellipse 8.svg"
      alt=""
      srcSet=""
      className="absolute top-2/4 translate-y-[-50%] z-[-100] dark-none"
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
import React from 'react'
import { Link } from 'react-router-dom';
import { Item } from '.';

const Option:React.FC<{data:Item}> = ({data}) => {
  return (

        <Link className="option" to={data.route || "#"}>
            <img src={data.img} alt="" className=''/>
            <h3 className='pl-[10px] text-[12px] text-[Inter] leading-[15px]'> {data.title}</h3>
            <hr/>
        </Link>      
  )
}

export default Option;
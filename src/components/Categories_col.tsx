import React from 'react'
import Category_col from './Category_col';
import { Item } from '.';

const Categories_col:React.FC<{
  data: Item[];
}> = ({data}) => {
  
  return (
    <div>
      {
        data.map((item,index) => {
          return <Category_col desc={item} key={index}/>
        })
      }
    </div>
    
  )
}

export default Categories_col;
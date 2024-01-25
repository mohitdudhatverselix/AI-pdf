import React from 'react'
import Category_col from './Category_col';

const Categories_col = ({data}) => {
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
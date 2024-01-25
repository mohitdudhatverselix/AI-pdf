import React from 'react'
import { Link } from 'react-router-dom';
import {Item} from '.'

const Category:React.FC<{desc:Item}> = ({desc}) => {
  return (
    <Link to="/screen7">
           <div className="categories-box">
            <div className="icon-box">
              <img src={desc.img} />
            </div>
            <div className="box-title">{desc.title}</div>
          </div>
    </Link>
  )
}

export default Category;
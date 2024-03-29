import React from 'react'
import { Link } from 'react-router-dom';

const More = ({desc : {title ,img, route}}) => {
  return (
    <div>
        <div className="more-title">
          <h3>
            {title}
          </h3>
          <Link className="icon-box" to={route}>
            <img src={img} />
          </Link>
        </div>
    </div>
  )
}

export default More;
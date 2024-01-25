import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Back = ({desc :{title,img}}) => {
  const navigate = useNavigate();
  return (
<div className="back">
<div onClick={() => {navigate(-1);console.log("Clicked");}}>
<Link className="icon-box rounded-full bg-white mr-[20px]">

    <img src={img}  alt="Back"/>

</Link>
</div>
<h3>{title}</h3>
</div>
  )
}

export default Back
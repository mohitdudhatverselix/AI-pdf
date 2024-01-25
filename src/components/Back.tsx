import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Item} from ".";
const Back:React.FC<{
  desc:Item,
}> = ({desc :{title,img}}) => {
  const navigate = useNavigate();
  return (
<div className="back">
<div onClick={() => {navigate(-1);console.log("Clicked");}}>
<Link className="icon-box rounded-full bg-white mr-[20px]" to={"#"}>
    <img src={img}  alt="Back"/>

</Link>
</div>
<h3>{title}</h3>
</div>
  )
}

export default Back
import React from "react";
import { Link } from "react-router-dom";

const Options = ({ data }) => {
  return (
    <div className="trending">
      {data?.map((item, i) => (
        <React.Fragment key={i}>
          <Link className="trending-option" to={item.route}>
            <div className="icon-box">
         
              <img src={item.img} alt={item.title} />
           
   
            </div>
            <div className="trending-title">{item.title}</div>
          </Link>
          {i !== data.length - 1 && (
            <img src="./icons/black-hr.svg" alt={`hr-${i}`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};


export default Options;

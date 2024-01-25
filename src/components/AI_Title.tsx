import React from 'react'
import { Link } from 'react-router-dom';


const AI_Title : React.FC = () => {
  return (
        <div className="ai">
          <h3 className="ai-title">AI PDF</h3>
          <div className="icon-box">
            <Link to="/screen8">
              <img src="./icons/setting.svg" />
            </Link>
          </div>
        </div>
  )
}

export default AI_Title;
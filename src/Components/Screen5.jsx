import React from 'react'
import Back from './Back'

const Screen5 = () => {
  return (
    <>
    <div className='app-container mb-[35px]'>
        <Back desc={{title:"Crop PDF",img:"./icons/left.svg"}}/>
     </div>

        <div className='pb-[15px] mb-[112px]'>
            <img src="./icons/Ellipse 8.svg" alt="" srcset="" className='absolute top-0 -z-10' />
            <img src="./icons/crop.svg" alt="" srcset="" />
        </div>                      
        <div className="app-container">
            <button className='loading-button'>
            <img src="./icons/Upload.svg" alt="" srcset="" />
                Upload File
            </button>
        </div>
      
    </>

       

  )
}

export default Screen5;
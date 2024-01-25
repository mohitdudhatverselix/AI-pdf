import React from 'react'
import { language } from '.'
const Side_Menu = () => {
  return (
    <div>
        <div className="side-menu">
            <h3 className='text-[#FF7D7D] text-[25px] font-extrabold text-center pt-[70px] leading-[123.529%] pb-[40] font-[Newsreader] tracking-[0.5px] mb-[40px]'>AI PDF</h3>
            <button className='w-[100px] h-[30px] bg-white rounded-[20px] mb-[35px] text-black'>
                Log in
            </button>
            <div className='lan-list'>
                {
                    language.map((item, index) =>{
                        return (
                            <>
                            <div className="lan-option">
                            {item}
                        </div>
                            <img src="./icons/Vector 1.png" alt="" srcSet="" />
                            </>
                        )
                    })
                    }
            </div>
            <h2 className='text-center font-[Inter] text-[12px] underline decoration-1 text-[#8D8D8D] mt-[30px]'>
                T&C Applied
            </h2> 
        </div>
    </div>
  )
}

export default Side_Menu;
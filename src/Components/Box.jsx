import React from 'react'

const Box= ({data}) => {
  return (
    <div className='dropdown-box'>
        <div className="drop-options">
            {
                data?.map((item, i) => {
                    return (
                        <>
                        <div className="drop-option" key={i}>
                            <div className="icon-box">
                                <img src={item.img} />
                            </div>
                            <div className="drop-title">{item.title}</div>
                        </div>
                        </>
                    );
                })
            }
        </div>
    </div>
  )
}

export default Box;

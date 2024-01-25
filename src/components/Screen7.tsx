import Back from "./Back";
import {pricing as data} from ".";

const Screen7 = () => {
  return (
    <>
      <img
        src="./icons/Ellipse 8.svg"
        alt=""
        srcSet=""
        className="absolute top-0 -z-50"
      />
      <div className="app-container">
        <Back desc={{img:"icons/left.svg"}}/>
        <h3 className="pre-heading">Get Premium Access</h3>
        <p className="pre-text">Enjoy ad free experience, fast editing, unlimited tools.</p>     
      </div> 
      <div className="prices">
          <div className="price bg-[#FFA9A9]">
            <div className="price-tag">
              Popular
            </div>
            <div className="price-amount text-white mt-[20px]">
              <h3 className="text-[30px] inline-block">12</h3>
              <span className="text-[12px] mt-[-8px] block">months</span>
            </div>
            <div className="total">
              <del className="text-white mt-[25px] prevPrice">INR 8000</del>
              <h3 className="text-white text-[15px] pb-[7px]">INR 6000</h3>
            </div>
          </div>
          {
            data.map((item)=>{
              return (
                <div className="price">
                <div className="price-amount mb-[30px]">
                  <h3 className="text-[30px] inline-block">{item.duration}</h3>
                  <span className="text-[12px] mt-[-8px] block">months</span>
                </div>
                <div className="total ">
             <del className="text-color-3 font-[Inter] text-[10px] text-center">INR {item.prevPrice}</del>
                  <h3 className="text-color-3 font-[Inter] text-[15px] text-center pb-[7px]">INR {item.currPrice}</h3>
                </div>
              </div>
              )
            })
          }
        </div> 
        <div className="cta text-color-3 text-[15px] text-center ">
          <h3 className="font-medium">Start your first plan now !!!</h3>
          <p className="font-[Inter] font-light">Automatic Renewal, Cancel Anytime</p>
        </div>
        <div className="center">
        <button className='loading-button bg-black text-white mt-[50px]'>
                Unlock now
            </button>
        </div>

    </>          
  );
};

export default Screen7;

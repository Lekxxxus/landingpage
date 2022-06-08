import React from "react";
import Vector1 from "./images/Vector1.png";
import Rent1 from "./images/Rent1.png";
import HOME from "./images/HOME.png";
import { useNavigate } from "react-router-dom";

function Rent() {
  let navigate = useNavigate();

  return (
    <div className="mx-auto my-5 max-w-7xl">
      <div className="flex flex-col items-center justify-center w-full h-screen gap-10 bg-[#E5E5E5]  ">
        <div className="px-20 bg--500 w-72">
          <img src={Vector1} alt="Vector1" />
        </div>
        <div className="h-10 bg--500 w-96 ">
          {/* <h1 className="text-2xl">Rent Succesful!</h1> */}
          <img src={Rent1} alt="Rent1" />
        </div>
        <div className="bg--500 ">
          <div className="bg-[#69140E] h-14 w-80  font-semibold text-white">
            <button
              onClick={() => {
                navigate("/Library");
              }}
              className="py-3 text-2xl"
            >
              BACK TO HOME
            </button>
            {/* <img src={HOME} alt="HOME" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rent;

import React from "react";
import Ellipse from "./images/Ellipse .png";
import Rectangle3 from "./images/Rectangle3.png";

function Profile() {
  return (
    <div className=" mx-auto max-w-7xl  bg-[#C4C4C4]">
      <div className="flex justify-between bg-[#3C1518]   ">
        <div className=" bg-[#] items-center  mx-9 py-7">
          <h1 className="bg-[#]  text-4xl  text-white text-left font-semibold ">
            Library
          </h1>
        </div>
        <div className=" flex justify-around bg-[#A44200]  mx-8 my-5  h-14  w-40  ">
          <img className="h-12 py-1 mt-1" src={Ellipse} alt="rob" />
          <h1 className="py-3 text-2xl font-semibold text-white">Profile</h1>
        </div>
      </div>

      <div className="bg-[#] my-4  border-solid h-32  px-8 flex justify-between mx-auto max-w-screen-2xl">
        <div className="flex items-center ">
          <div>
            <img className="h-24" src={Ellipse} alt="rob" />
          </div>

          <div className="bg-[#] my-2 mx-6">
            <div className="w-80  h-9 bg-[#] ">
              <h1 className="text-3xl bg-[#] text-[#3C1518]  text-left	 font-bold">
                Robert Mar Mendez
              </h1>
            </div>
            <div className="h-8 text-lg font-medium w-80 bg--600">
              <h1 className="text-2xl   text-left bg-[#]  ">
                University of Makati
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-[#A44200]   h-12 w-52   my-10 items-center py-2 px-2 ">
          <h1 className="text-2xl font-bold text-center text-white ">ACTIVE</h1>
        </div>
      </div>

      <div className="bg-[#C4C4C4]  ">
        <h1 className="h-12 text-4xl font-bold bg-[#]  mx-8 text-left w-52 ">
          History
        </h1>

        <div className="flex gap-5 mx-8   my-6  bg-[#C4C4C4]">
          <div className="bg-[#]     ">
            <img className="h-56 w-60" src={Rectangle3} alt="Rectangle3" />
            <div className="h-16 bg-[#FCFCFC] w-60 px-2 ">
              <h1 className="  text-2xl font-semibold   h-10 text-left bg-[#]">
                Gatsby
              </h1>
              <h1 className="font-semibold text-sm  h-5 w-56 text-black bg-[#] text-left   bg-[#] ">
                Date Rented: 4/20/21
              </h1>
            </div>
          </div>

          <div className="bg-[#C4C4C4]    w-60  ">
            <div className="">
              <img className="h-56 w-60 " src={Rectangle3} alt="Rectangle3" />
              <div className="h-16 bg-[#FCFCFC] px-2 w-60 ">
                <h1 className="    font-semibold text-left text-base bg-[#] ">
                  An Anthology of Radi-cal Trans Poetics
                </h1>
                <h1 className="font-semibold text-xs  h-5 w-60 text-black bg-[#] text-left   bg-[#] ">
                  Date Rented: 3/15/21
                </h1>
              </div>
            </div>
          </div>

          <div className="bg-[#C4C4C4] divide-stone-50 w-60">
            <div className="">
              <img className="h-56 w-60 " src={Rectangle3} alt="Rectangle3" />
              <div className="h-16 bg-[#FCFCFC] w-60   px-2">
                <h1 className="text-xl font-semibold text-left ">
                  It was never going to be okay
                </h1>
                <h1 className="font-semibold text-xs  h-8  w-60 text-black bg-[#] text-left  ">
                  Date Rented: 7/23/18
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* image */}
      </div>

      {/* History */}
    </div>
  );
}

export default Profile;

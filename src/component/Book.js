import React, { useEffect, useState } from "react";
import Ellipse from "./images/Ellipse .png";
import Rectangle10 from "./images/Rectangle10.png";
import { useNavigate } from "react-router-dom";

function Books() {
  let navigate = useNavigate();

  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setCount((prevState) => prevState + 1);
  // }, []);

  const handleDecrement = () => {
    setCount((prevState) => prevState - 1);
  };

  return (
    <div className="bg-[#E5E5E5] mx-auto max-w-7xl my-20">
      {/* Library / Profile */}
      <div className="flex justify-between bg-[#3C1518]  mt-10 ">
        <div className=" bg-[#] items-center h-20 w-40 mx-9 py-7">
          <h1 className="bg-[#]  text-4xl  text-white text-left font-semibold ">
            Library
          </h1>
        </div>
        <div className=" flex justify-around bg-[#A44200]  mx-8 my-5  h-14  w-40  ">
          <img className="h-12 py-1 mt-1" src={Ellipse} alt="rob" />
          <h1 className="py-3 text-2xl font-semibold text-white">Profile</h1>
        </div>
      </div>
      {/* Library / Profile*/}
      {/* BACK /Book Details */}
      <div className="mx-auto max-w-screen-2xl bg-[#]">
        <div className="h-10 text-2xl font-base   text-white bg-[#D58936] my-3 w-44 mx-9 ">
          <button
            onClick={() => {
              navigate("/Library");
            }}
            className="px-2 py-1 font-semibold"
          >
            BACK
          </button>
        </div>

        <div className="h-12  mx-9  my-3 bg-[#] w-60 ">
          <h1 className="text-4xl font-bold text-center ">Book Details</h1>
        </div>
      </div>
      {/* 
      BACK /Book Details */}
      {/* A Modern Utopia */}
      <div className="flex mx-auto mt-2 bg-[#] max-w-screen-2xl">
        <div className="bg-[#] mx-9">
          <img src={Rectangle10} alt="Rectangle10" />
        </div>
        <div className="items-center w-full py-5 bg--400">
          <div className="flex justify-between mx-5 ">
            <div className="font-semibold w-80 h-11 bg-[#]">
              <h1 className="text-4xl ">A Modern Utopia</h1>
            </div>

            <div className="h-10    bg-[#A44200] w-60">
              <h1 className="py-1 text-2xl font-semibold text-white">
                AVAILABLE
              </h1>
            </div>
          </div>

          <div className="py-3 mx-5 h-52 min-w-min bg--900">
            <h1 className="font-semibold text-justify ">
              To this planet "out beyond Sirius" the Owner of the Voice and the
              botanist are translated, imaginatively, "in the twinkling of an
              eye . . . We should scarcely note the change. Not a cloud would
              have gone from the sky." Their point of entry is on the slopes of
              the Piz Lucendro in the <br />
              Swiss Alps.
            </h1>
            <div className="py-5 font-semibold text-justify min-w-min">
              <h1 className="">
                The adventures of these two characters are traced through eleven
                chapters. Little by little they discover how Utopia is
                organized. It is a world with "no positive compulsions at all .
                . . for the adult Utopian—unless they fall upon him as penalties
                incurred."
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* A Modern Utopia */}

      {/* Rent Details */}
      <div className="py-10 mx-auto max-w-screen-2xl">
        <h1 className="h-10 text-4xl font-bold bg-[#] text-left mx-9 w-80">
          Rent Details
        </h1>
      </div>
      <div className="bg-[#] py-5  flex    mx-auto  max-w-screen-2xl">
        <div className="h-10 text-3xl font-semibold mx-9 bg--900 w-96">
          Duration of Rent (Days)
        </div>
        <div className="flex h-12 text-3xl font-semibold text-center bg--900 ">
          <button
            onClick={handleDecrement}
            className="bg-[#D58936] h-10 w-12 text-2xl font-normal"
          >
            -
          </button>
          <h1 className="bg-[#FCFCFC] h-10 w-12 py-1 text-2xl font-bold">
            {count}
          </h1>
          <button
            onClick={handleIncrement}
            className="bg-[#A44200] h-10  w-12 text-2xl text-center"
          >
            +
          </button>
        </div>
        <div className="w-64 h-10 mx-20 bg-red-900 flex-end">
          <button
            onClick={() => {
              navigate("/rent");
            }}
            className="text-2xl font-bold text-[#FFFFFF]  py-1 px-0"
          >
            BORROW BOOK
          </button>
        </div>
        {/* Rent Details */}
      </div>
    </div>
  );
}

export default Books;

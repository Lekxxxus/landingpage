import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Ellipse from "./images/Ellipse .png";
import Rectangle from "./images/Rectangle.png";

function Library() {
  const books = [
    {
      img: Rectangle,
      title: "Ocean House"
    },

    {
      img: Rectangle,
      title: "Ocean House"
    },

    {
      img: Rectangle,
      title: "Ocean House"
    },

    {
      img: Rectangle,
      title: "Ocean House"
    },

    {
      img: Rectangle,
      title: "Ocean House"
    },

    {
      img: Rectangle,
      title: "Ocean House"
    },

    {
      img: Rectangle,
      title: "Ocean House"
    },

    {
      img: Rectangle,
      title: "Ocean House"
    },
    {
      img: Rectangle,
      title: "Ocean House"
    },
    {
      img: Rectangle,
      title: "Ocean House"
    },
    {
      img: Rectangle,
      title: "Ocean House"
    },
    {
      img: Rectangle,
      title: "Ocean House"
    },
    {
      img: Rectangle,
      title: "Ocean House"
    },
    {
      img: Rectangle,
      title: "Ocean House"
    },
    {
      img: Rectangle,
      title: "Ocean House"
    },
    {
      img: Rectangle,
      title: "Ocean House"
    }
  ];

  // hello = () => {
  //   return <div></div>;
  // };

  // const [count,    setCount] = useState(4)
  // currentstate / function that allow update the currentstate

  const navigate = useNavigate();

  function getSelectValue() {
    var selectedValue = document.getElementById("list").value;
    console.log(selectedValue);
  }

  return (
    <div className=" bg-[#3C1518] mx-auto max-w-7xl my-10   ">
      <div className="flex justify-between ">
        <div className=" bg-[#] items-center h-20 w-40 mx-7 py-7">
          <h1 className="bg-[#3c152a]  text-4xl  text-white text-left font-semibold ">
            Library
          </h1>
        </div>
        <div className=" flex justify-around bg-[#A44200]  mx-8 my-5  h-14  w-40  ">
          <img className="h-12 py-1 mt-1" src={Ellipse} alt="rob" />
          <h1 className="py-3 text-2xl font-semibold text-white">Profile</h1>
        </div>
      </div>

      <div className="  bg-[#E5E5E5]">
        <div className="flex justify-between mx-auto max-w-screen-2xl">
          <div className="text-center px-7 py-7">
            <h1 className="text-5xl font-bold">List of Books</h1>
          </div>

          {/* Category */}
          <div className="flex px-7 py-9 ">
            <div className="">
              <h1 className="px-1 py-1 text-base font-semibold ">Category</h1>
            </div>
            <div className="h-10 w-80 px-3 mx-3 font-semibold border-solid  bg-[#461010]">
              <select id="list" onChange={getSelectValue}>
                <option value="home">Home</option>
                <option value="list">List</option>
                <option value="view">View</option>
                <option value="rent">Rent</option>
                {/* <option>Profile</option> */}
              </select>

              {/* <form>
                <select>
                  <option value="all">All</option>
                  <option value="view">View </option>
                  <option value="rent">Rent </option>
                </select>
              </form> */}
            </div>
          </div>
        </div>
        {/* Category */}
        <div className="w-full bg-[#E5E5E5] ">
          <div className=" pt-5 flex gap-5 bg-[#E5E5E5] justify-center flex-wrap mx-auto w-[95%] 	">
            {books.map((book, i) => (
              <div className="bg-[#A44200]   w-72 " key={i}>
                <div className="">
                  <img className="h-56 w-96" src={book.img} alt="Rectangle" />
                  <div className="h-24 bg-[#FCFCFC] w-72 ">
                    <div className="py-1 pl-4 text-base font-semibold text-left">
                      {book.title}
                    </div>
                    <button
                      onClick={() => navigate(`../book/${book.title}`)}
                      className="font-semibold text-base text-white h-8 w-64 bg-[#69140E]"
                    >
                      RENT
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Library;

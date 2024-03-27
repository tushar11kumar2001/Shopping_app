import React from "react";

const ShimmerCard = () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className=" relative top-24 grid grid-cols-1 justify-items-center gap-y-14 sm:grid-cols-4">
      {arr.map((key) => {
        return (
          <div key={key} className="w-[300px] min-h-[400px]  bg-white shadow-md rounded-lg  p-5  ">
            <div className="animate-pulse">
              <div className="bg-gray-300 h-40 w-full"></div>
              <div className="pt-4 ">
                <div className="bg-gray-300 h-8 w-3/4 my-2 "></div>
                <div className="bg-gray-300 h-8 w-1/2 my-2 "></div>
                <div className="bg-gray-300 h-8 w-full my-2 "></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShimmerCard;

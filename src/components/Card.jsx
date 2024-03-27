import React, { useState } from "react";
import { useCartContext } from "../utils/context.jsx";

const Card = ({data}) => {
    const [flag,setFlag] = useState(true);
    const cartContext = useCartContext();
   
    const handleClick = (item)=>{
        if(flag) cartContext.addItems(item);
        else cartContext.removeItem(item);
        setFlag(!flag) 
    }
   return (
    <div className="w-[300px] min-h-[400px] flex flex-col pt-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="w-1/2 h-[200px] mx-auto rounded-t-lg "
          src={data?.image}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5 flex flex-col justify-between  flex-grow ">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {data?.title}
          </h5>
        </a>
        <div className="text-xl font-semibold tracking-tight text-gray-900">
          Rating : {data?.rating?.rate}{" "}
          <span>
            <i className="fa-solid fa-star text-green-600"></i>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            $   {data?.price}
          </span>
          <button
            onClick={()=>handleClick(data)}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
           {flag? "Add to cart":"Remove"} 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

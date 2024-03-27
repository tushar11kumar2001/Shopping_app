import React, { useEffect, useState } from 'react'
import { useCartContext } from '../utils/context'

const CartItems = ({item}) => {
    const [quantity,setQuantity] = useState(1);

    const cartContext = useCartContext();
    useEffect(()=>{ cartContext.addTotalPrice(item.price)},[])
    function increase(){
        setQuantity(quantity+1);
        cartContext.addTotalPrice(item?.price);
    }
    function decrease(){
        if(quantity>1){
            setQuantity(quantity-1);
            cartContext.subTotalPrice(item.price);
        }
    } 

  return (
   
<div className="flex justify-between pt-10 pb-3 border-b-2 border-b-gray-300 pl-5 bg-white    md:flex-row   dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
   <div className='w-11/12 flex items-center'>
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={item.image} alt=""/>
    <div className=" p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
        <div className='flex items-center gap-5 '>
            <div className='flex justify-evenly border border-gray-400 w-20 h-10 rounded bg-gray-300' >
                <p onClick={increase} className='flex-grow border-r border-r-gray-400 text-center pt-1.5 font-bold cursor-pointer'><i className="fa-solid fa-plus"></i></p>
                <p className='flex-grow  border-r border-r-gray-400  text-center pt-1.5 font-bold'>{quantity}</p>
                <p onClick={decrease} className='flex-grow  text-center pt-1 font-bold text-xl cursor-pointer'><i className="fa-solid fa-minus"></i></p>
            </div>
            <span onClick={()=>{
                cartContext.removeItem(item);
                cartContext.subTotalPrice(item.price);
                }} className='text-teal-700 cursor-pointer font-medium hover:border-b-2 border-b-teal-700'>Delete</span>
        </div>
    </div>
    </div>
    <p className='text-xl font-bold'>${item.price}</p>
</div>

  )
}

export default CartItems


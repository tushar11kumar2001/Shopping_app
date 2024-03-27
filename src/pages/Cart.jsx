import React from 'react'
import { useCartContext } from '../utils/context'
import CartItems from '../components/CartItems';

const Cart = () => {
    const cartContext = useCartContext();
  if(cartContext.cartItems.length === 0) return(
  <div className='relative'>
  <img className=' h-screen absolute left-32' width={1200} src='https://cdn.dribbble.com/users/665029/screenshots/16162764/media/3ea69cb1655fba401acc6c4328d38633.gif'/> 
  <h1 className='absolute top-[500px] left-[45%] text-xl font-bold text-yellow-800 '>Your cart is empty</h1>
  </div> 
  )
  return (
    <div className='min-h-screen relative top-20  bg-slate-100 p-10'>
      <div className='p-5 w-11/12  bg-white' >
       <div className=' border-b-2 border-b-gray-300 '>
       <p className='text-3xl font-medium'>Shopping Cart </p>
       <p className=' text-gray-600 font-medium text-end'>Price</p>
       </div>
       <div>
       {cartContext.cartItems.map((data)=>{
        
           return <CartItems item={data} key={data.id}/>
       })}
       </div>
       <div className='text-end font-medium text-lg'>Subtotal ({cartContext.totalItems} items) :<span className='font-bold'> $ {cartContext?.subTotal}</span></div>
      </div>
    </div>
  )
}

export default Cart

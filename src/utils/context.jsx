import { createContext, useContext, useState } from "react";

const cartContext = createContext(null);
export const useCartContext = ()=>useContext(cartContext);


export const CartContextProvider = (props )=>{
    const [cartItems,setCartItems] = useState([]);
    const [subTotal,setSubTotal] = useState(0);
    const [totalItems,setTotalItems] = useState(cartItems.length);
    const addItems = (item)=>{
        setCartItems([...cartItems,item])
    }
    const removeItem = (item)=>{
        const filter = cartItems.filter((data)=>data.id != item.id);
        setCartItems(filter);
    }
    const addTotalPrice = (price)=>{
       setSubTotal((prev)=>prev + price);
       setTotalItems(prev=>prev+1);
    }
    const subTotalPrice = (price)=>{
        setSubTotal((prev)=>prev - price);
        setTotalItems(prev=>prev-1);
     }
    return (
    <cartContext.Provider value={
        {
            cartItems,
            addItems,
            removeItem,
            subTotal,
            addTotalPrice,
            subTotalPrice,
            totalItems
        }
    }>
        {props.children}
    </cartContext.Provider>
    )
}
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Shoes from "../pages/Shoes";
import Shirts from "../pages/Shirts";
import Caps from "../pages/Caps";
export const useGetRoutes = ()=>{
    const route = [
        {
            path : "/",
            element : <Home/>
        },
        {
            path : "/shoes",
            element : <Shoes/>
        },
        {
            path : "/shirts",
            element : <Shirts/>
        },
        {
            path : "/caps",
            element : <Caps/>
        },
        {
            path : "/cart",
            element : <Cart/>
        }
    ];

    return route;
}

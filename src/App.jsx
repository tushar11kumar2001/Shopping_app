import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import DynamicRoutes from "./components/DynamicRoutes"


function App() {
   return (
      <>
       <Header/>
       {/* <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/cart" element={<Cart/>}/>
      </Routes> */}
      <DynamicRoutes/>
      </>
     
   )
}

export default App

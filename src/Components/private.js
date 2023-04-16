import { Route, Routes } from "react-router-dom";

import Home from "./Home";

import { useContext } from "react";
import CartContext from "../Store/card-context";
import AuthForm from "../Auth/Auth";


const Private =()=>{
   const  authCtx = useContext(CartContext)
    const isloggedIn = authCtx.isLoggedIn;
    return <>
       <Routes>
        {isloggedIn ? <Route path="/home"  element={<Home/>}/>: <Route path="/" element={<AuthForm/>}/>}
        </Routes>
    </>
}

export default Private;
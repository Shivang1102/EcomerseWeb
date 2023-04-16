import { BrowserRouter, Routes, Route ,Navigate, useLocation } from "react-router-dom";
import Main from './Components/Main';
import About from './Components/About';
import Home from './Components/Home';
import Contact from "./Components/Contact";
import ProductDeatails from "./Components/ProductDetails";
import AuthForm from "./Auth/Auth";
import { useContext, useEffect } from "react";
import CartContext from "./Store/card-context";




function App() {


 const authCtx  = useContext(CartContext);
 const location = useLocation();

 useEffect(() => {
   // This will trigger a re-render of the component whenever the location changes
 }, [location]);
 
 console.log('isLoggedIn:', authCtx.isLoggedIn);

  return <div>
  <Routes>
   
    <Route path="/" element={<AuthForm/>}/>
    {authCtx.isLoggedIn ? (
          <Route path="/Main" element={<Main />} />
        ) : (
             <Route path='*' element={<Navigate to="/" replace />}/>
        )}
    <Route path="/about" element={<About/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Main/:productId'  element={<ProductDeatails/>}/>
    <Route path="auth" element={<AuthForm/>}/>
    <Route path="/somePath" element={<Navigate replace to="/" />} />
    </Routes>
    </div>
   


}
export default App;
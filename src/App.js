import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Components/Main';
import About from './Components/About';
import Home from './Components/Home';
import Contact from "./Components/Contact";
import ProductDeatails from "./Components/ProductDetails";
import AuthForm from "./Auth/Auth";




function App() {

 
  return  <BrowserRouter>
 
  <Routes>
    <Route path="/" element={<AuthForm/>}/>
    <Route exact path="/Main" element={<Main/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Main/:productId'  element={<ProductDeatails/>}/>
    <Route path="auth" element={<AuthForm/>}/>
    </Routes>
</BrowserRouter>

}
export default App;
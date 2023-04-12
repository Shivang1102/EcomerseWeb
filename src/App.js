

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Components/Main';
import About from './Components/About';
import Home from './Components/Home';
import Contact from "./Components/Contact";
import ProductDeatails from "./Components/ProductDetails";




function App() {

 
  return  <BrowserRouter>
 
  <Routes>
    <Route path="/" Component={Main}/>
    <Route exact path="/Main" Component={Main}/>
    <Route path="/about" Component={About}/>
    <Route path="/home" Component={Home}/>
    <Route path='/Contact' Component={Contact}/>
    <Route path='/Main/:productId'  Component={ProductDeatails}/>

    </Routes>
</BrowserRouter>

}
export default App;

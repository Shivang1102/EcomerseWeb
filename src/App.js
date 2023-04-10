

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Components/Main';
import About from './Components/About';
import Home from './Components/Home';
import Contact from "./Components/Contact";




function App() {

 
  return  <BrowserRouter>
 
  <Routes>
    <Route exact path="/" Component={Main}/>
    <Route path="/about" Component={About}/>
    <Route path="/home" Component={Home}/>
    <Route path='/Contact' Component={Contact}/>
  </Routes>
</BrowserRouter>

}
export default App;

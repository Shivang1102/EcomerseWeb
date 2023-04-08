

import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Main from './Components/Main';
import About from './Components/About';
import Home from './Components/Home';


const router = createBrowserRouter([
  {path: '/' , element: <Main/>},
  {path:'/about' ,element:<About/>},
  {path:'/home', element:<Home/>}
])

function App() {

 
  return  <RouterProvider router={router}/>

}
export default App;

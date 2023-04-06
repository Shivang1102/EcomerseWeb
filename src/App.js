
import { Button } from 'react-bootstrap';

import Header from './Components/Header';
import Product from './Components/Product';
import Cart from './Components/Cart';
import { Fragment, useState } from 'react';
import Footer from './Components/footer';


function App() {

   const [cartIsShown, setCartIsShown]=useState(false)
   console.log(cartIsShown);
   const showcartHandler=()=>{
    setCartIsShown(true);
    console.log('HI')
   }

   const hidecartHandler=()=>{
    setCartIsShown(false);
   }
   


  return <Fragment>
      {console.log('cart is shown')}
     <Header  onShowCart={showcartHandler}/>
       {cartIsShown &&  <Cart/>}
     <Product/>
                 
     <div style={{ textAlign: 'center' }}>
        <Button variant="primary" >
          Show Cart
        </Button>
      </div>        
             
      <Footer/>       

      
   </Fragment>
  
}

export default App;

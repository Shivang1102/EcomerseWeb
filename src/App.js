
import { Button } from 'react-bootstrap';

import Header from './Components/Header';
import Product from './Components/Product';

import Footer from './Components/footer';
import CartProvider from './Store/card-Provider';


function App(props) {

 const openCartHandler=(setshow)=>{
    
 }
  return <CartProvider>
      {console.log('cart is shown')}
     <Header />
       
     <Product/>
                 
     <div style={{ textAlign: 'center' }}>
        <Button variant="primary" onClick={openCartHandler} >
          Show Cart
        </Button>
      </div>        
             
      <Footer/>       

      
   </CartProvider>
  
}

export default App;

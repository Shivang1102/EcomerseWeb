
import CartProvider from "../Store/card-Provider";
import Header from "./Header";
import { Button } from "react-bootstrap";
import Product from "./Product";
import Footer from "./footer";


const Main=()=>{

    const openCartHandler=(setshow)=>{
    
    }

 return <CartProvider>
   
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

export default Main;
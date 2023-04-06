import { Button } from "react-bootstrap";
import  './Cart.css'


const Cart =(props)=>{
    console.log('Inside cart');
    const cartElements = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        quantity: 2,
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        quantity: 3,
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        quantity: 1,
        
        }
        
        ]

        return <section>
           <div className={"cart-row cart-header"} >
            <span className={"cart-item cart-header"}  >
               Item
            </span>
            <span className={"cart-price cart-header"}>
              Price
            </span>
            <span  className={"cart-quantity cart-header"}>
             Quantity
            </span>
           </div>
          <div  className="cart-items">
                 {cartElements.map(items=>{
                      return (
                        <>
                        <div className="cart-row" key={items.title}>
                           <span className="cart-item cart-column">
                                 <img className="cart-img" src={items.imageUrl} alt=""/>
                                 <span>{items.title}</span>
                           </span>
                           <span className="cart-price cart-column">{items.price}</span>
                           <span className="cart-quantity cart-column">
                            <input type='text' value={items.quantity}/>
                            <button>Remove</button>
                           </span>

                            </div>
                         
                            </>
                      )
                 }
                    )}
                       <div className="cart-total">
                                <span >
                                    <span className="total-title">
                                        <strong>Total Amount</strong>
                                    </span>
                                    ₹
                                    <span>200</span>
                                </span>

                                 
                                </div>
          </div>
        </section>
       
}
export default Cart;
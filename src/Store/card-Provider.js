import CartContext from "./card-context"

import React,{useReducer, useState} from "react"
 
const defaultcartState={
    items:[],
    totalamount:0
}
const cartReducer=(state,action)=>{

    if(action.type==='ADD'){

        const updatedTotalamount=state.totalamount+ action.item.price * action.item.amount;

        const existingCartItemIndex =state.items.findIndex(item=>item.id ===action.item.id)
        const existingCartItem= state.items[existingCartItemIndex] 

         let updatedItems
        if(existingCartItem){
            let updateditem={
                ...existingCartItem,
                amount:existingCartItem.amount+action.item.amount
            };
              updatedItems=[...state.items]
              updatedItems[existingCartItemIndex]=updateditem;

        }else{
            updatedItems= state.items.concat(action.item);
        }

        
        
        return{
            items:updatedItems,
            totalamount:updatedTotalamount 
        }
    }

   if(action.type==='REMOVE'){
    const existingCartItemIndex =state.items.findIndex(item=>item.id ===action.id)
    
    const existingItem =state.items[existingCartItemIndex];
    const updatedTotalamount =state.totalamount - existingItem.price;
     let updateditems;

     if(existingItem.amount ===1){
            updateditems =state.items.filter(item=> item.id !== action.id)
     }else{
      const updateditem={...existingItem , amount:existingItem.amount-1};

      updateditems=[...state.items]
       updateditems[existingCartItemIndex]=updateditem;
     }
     return{
        items:updateditems,
        totalamount:updatedTotalamount
     }

   }
    
   return defaultcartState;
}

const CartProvider=(props)=>{

 const  [ cartstate , disdpatchCartAction] =  useReducer(cartReducer, defaultcartState);
  const [token , setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const userIsLoggedIn = !!token;

  const loginHandler=(token)=>{
      setToken(token);
      setIsLoggedIn(true);
  }

  const logoutHandler=()=>{
    setToken(null);
    setIsLoggedIn(false);
  }
 
    const additemtocartHandler=(item)=>{
            disdpatchCartAction({type:'ADD', item:item})
    }

    const removeitemfromcartHamdler=(id)=>{
         disdpatchCartAction({type:'REMOVE' ,id:id})
    }

   const cartcontext ={
    items:cartstate.items,
    totalamount:cartstate.totalamount,
    additem: additemtocartHandler  ,
    removeitem:removeitemfromcartHamdler,
    token:token,
    isLoggedIn:isLoggedIn,
    login: loginHandler,
    logout:logoutHandler
   }


   return<CartContext.Provider  value={cartcontext}>
    {props.children}
   </CartContext.Provider>

}

export default CartProvider;    
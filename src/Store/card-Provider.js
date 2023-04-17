import CartContext from "./card-context";
import axios from "axios";
import React, { useReducer, useState, useEffect } from "react";

const defaultcartState = {
  items: [],
  totalamount: 0,
};
const cartReducer = (state, action) => {
  if (!state.items) {
    state = { items: [], totalamount: 0 };
  }

  if (action.type === "ADD") {
    const updatedTotalamount =
      state.totalamount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;
    if (existingCartItem) {
      let updateditem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updateditem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalamount: updatedTotalamount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalamount = state.totalamount - existingItem.price;
    let updateditems;

    if (existingItem.amount === 1) {
      updateditems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updateditem = { ...existingItem, amount: existingItem.amount - 1 };

      updateditems = [...state.items];
      updateditems[existingCartItemIndex] = updateditem;
    }
    return {
      items: updateditems,
      totalamount: updatedTotalamount,
    };
  }

  if (action.type === "SET") {
    return {
      items: action.items,
      totalamount: action.totalamount,
    };
  }

  return defaultcartState;
};

const CartProvider = (props) => {
  const [cartstate, disdpatchCartAction] = useReducer(
    cartReducer,
    defaultcartState
  );
  const initialTokenExpirationTime = localStorage.getItem("expirationTime");
  const [tokenExpirationTime, setTokenExpirationTime] = useState(
    initialTokenExpirationTime
  );
  const inititalToken = localStorage.getItem("token");
  const [token, setToken] = useState(inititalToken);
  const [isLoading, setIsLoading] = useState(false);

  const isUserLoggedIn = !!token;

  const calculateRemainingTime = () => {
    const currentTime = new Date().getTime();
    const adjustedExpirationTime = new Date(tokenExpirationTime).getTime();
    const remainingDuration = adjustedExpirationTime - currentTime;
    return remainingDuration;
  };

  const loginHandler = (token, expirationTime, email) => {
    setToken(token);
    setTokenExpirationTime(expirationTime);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);
    localStorage.setItem("email", email);
  };

  const logoutHandler = () => {
    setToken(null);
    setTokenExpirationTime(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    console.log("loggout ");
    localStorage.removeItem("email");
  };

  useEffect(() => {
    if (token && tokenExpirationTime) {
      const remainingTime = calculateRemainingTime();
      setTimeout(() => {
        logoutHandler();
      }, remainingTime);
    } else {
      clearTimeout();
    }
  }, [token, logoutHandler, tokenExpirationTime]);

  const userEmail = localStorage.getItem("email");
  const loginEmail = userEmail
    ? userEmail.replace("@", "").replace(".", "")
    : "";


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        if (loginEmail) {
          const response = await axios.get(
            `https://react-tutorial-ea45d-default-rtdb.firebaseio.com/${loginEmail}.json`
          );
          if (response.data) {
            disdpatchCartAction({
              type: "SET",
              items: response.data.items,
              totalamount: response.data.totalamount,
            });
          }
        }
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [loginEmail]);

  useEffect(() => {
    if (isLoading) {
      return;
    }
    const saveData = async () => {
     
      try {
        if(loginEmail){  await axios.put(
            `https://react-tutorial-ea45d-default-rtdb.firebaseio.com/${loginEmail}.json`,
            {
              items: cartstate.items,
              totalamount: cartstate.totalamount,
            }
          );}
      
      } catch (error) {
        console.log(error);
      }
    };
    saveData();
  }, [cartstate, isLoading, loginEmail]);

  const additemtocartHandler = async (item) => {
    disdpatchCartAction({ type: "ADD", item: item });
    
  };

  const removeitemfromcartHamdler = async (id) => {
    disdpatchCartAction({ type: "REMOVE", id: id });
  
  };

  const cartcontext = {
    items: cartstate.items,
    totalamount: cartstate.totalamount,
    additem: additemtocartHandler,
    removeitem: removeitemfromcartHamdler,
    token: token,
    isLoggedIn: isUserLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <CartContext.Provider value={cartcontext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

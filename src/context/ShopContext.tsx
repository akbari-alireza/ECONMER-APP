import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext :any = createContext();

const ShopContextProvider = (props) => {
     
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const naigate = useNavigate();

const addToCart = async (itemId, size) => {
    if (!size) {
        toast.error('Select Product Size');
        return;
    }

    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
        if (cartData[itemId][size]) {
            cartData[itemId][size] += 1; 
        } else {
            cartData[itemId][size] = 1;
        }
    } else {
        cartData[itemId] = {};
        cartData[itemId][size] = 1;
    }
    
    setCartItems(cartData);
};

const getCartCount = () => {
    let totalCount = 0; 

    for (const itemId in cartItems) {
        if (cartItems.hasOwnProperty(itemId)) {
            for (const size in cartItems[itemId]) {
                if (cartItems[itemId][size] > 0) {
                    totalCount += cartItems[itemId][size];
                }
            }
        }
    }

    return totalCount; 
};
    
  const updateQuantity = async (itemId, size,quantity) =>{

    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;

    setCartItems(cartData);
  }

  console.log("cartItem", cartItems);


  const getCartAmount = () => {
    
    let totalAmount = 0;
    for(const items in cartItems){
        let itemInfo = products.find((product)=> product._id === items);
        for(const item in cartItems[items]){
            try {
                if (cartItems[items][item] > 0){
                    totalAmount += itemInfo.price * cartItems[items][item];
                }
            } catch (error){

            }
        }
    }
    return totalAmount;
  }



    const value = {
        products, 
        currency ,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        naigate
    }

   
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider





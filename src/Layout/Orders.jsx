import React, { useState } from "react";
import Cart from "../Shop/Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "./ReviewItem";
import { deleteShoppingCart, removeFromDb } from "../fakeData/fakedb";

const Orders = () => {
  const saveCart = useLoaderData();
  const [cart, setCart] = useState(saveCart);
  const handleRemoveFromCart = (id) =>{
    const remaining = cart.filter(product => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  }

  const handleClearCart=()=>{
    setCart([]);
    deleteShoppingCart();
  }
  
  return (
    <div className="bg-slate-100 grid grid-cols-1 lg:grid-cols-5 overflow-y-scroll h-screen">
      <div className=" lg:col-span-3 mx-auto mb-24">
        {
            cart.map(product => <ReviewItem 
                key={product.id}
                product ={product}
                handleRemoveFromCart ={handleRemoveFromCart}
            ></ReviewItem>)
        }
      </div>
      <div className="w-[100%] lg:h-[600px] lg:w-[350px] bg-fuchsia-200 mt-7 sticky top-7 rounded">
        <Cart 
        cart={cart}
        handleClearCart={handleClearCart}
        >
          <Link to="/checkout"><button className='h-[48px] w-[230px] text-white'>Proceed Checkout</button></Link>
        </Cart>
      </div> 
    </div>
  );
};

export default Orders;

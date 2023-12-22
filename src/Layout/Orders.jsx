import React, { useState } from "react";
import Cart from "../Shop/Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "./ReviewItem";
import { removeFromDb } from "../fakeData/fakedb";

const Orders = () => {
  const saveCart = useLoaderData();
  const [cart, setCart] = useState(saveCart);
  const handleRemoveFromCart = (id) =>{
    const remaining = cart.filter(product => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  }
  
  return (
    <div className="bg-slate-100 grid grid-cols-1 lg:grid-cols-5">
      <div className=" lg:col-span-3 m-8 mx-auto">
        {
            cart.map(product => <ReviewItem 
                key={product.id}
                product ={product}
                handleRemoveFromCart ={handleRemoveFromCart}
            ></ReviewItem>)
        }
      </div>
      <div className="w-[100%] lg:h-[600px] lg:w-[350px] bg-fuchsia-200 mt-7">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;

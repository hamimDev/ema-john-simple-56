import React, { useState } from 'react';
import Shop from '../Shop';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart } from '../../fakeData/fakedb';
import { Link } from 'react-router-dom';

const Order = () => {
    const [cart, setCart]= useState([]);

    const handleAddToCart = (product)=>{
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    const handleClearCart=()=>{
        setCart([]);
        deleteShoppingCart();
      }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-5 overflow-y-scroll h-screen gap-3'>
            <div className='bg-slate-100 lg:col-span-4 mx-auto '>
               <Shop 
               handleAddToCart ={handleAddToCart} 
               setCart = {setCart}
               ></Shop> 
            </div>
            <div className='lg:h-[644px] lg:w-[264px] bg-fuchsia-200 sticky top-0 rounded'>
            <Cart cart ={cart}
                  handleClearCart={handleClearCart}
            >
                <Link to="/orders"><button className='h-[48px] w-[230px] text-white'>Review Orders</button></Link>
            </Cart>
            </div>
        </div>
    
    );
};

export default Order;
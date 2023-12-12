import React, { useState } from 'react';
import Shop from '../Shop';
import Cart from '../Cart/Cart';
import { addToDb } from '../../fakeData/fakedb';

const Order = () => {
    const [cart, setCart]= useState([]);

    const handleAddToCart = (product)=>{
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-5'>
            <div className='bg-slate-100 lg:col-span-4'>
               <Shop 
               handleAddToCart ={handleAddToCart} 
               setCart = {setCart}
               ></Shop> 
            </div>
            <div className=' lg:h-[944px] lg:w-[264px] bg-fuchsia-200 sticky top-0'>
            <Cart cart ={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;
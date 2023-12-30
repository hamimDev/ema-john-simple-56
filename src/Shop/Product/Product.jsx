import React, { useState } from 'react';

const Product = (props) => {
    
    const {img , id, name, seller, quantity, price, ratings} = props.product;

    const handleAddToCart = props.handleAddToCart;
    
    return (
        <div className='m-[50px] w-[300px] h-[600px] border-solid border-2 border-sky-500 rounded-md relative mb-24'>
            <img className='w-[286px] h-[286px] m-[7px] rounded-md' src={img} alt="" />
            <div className='ml-[14px] mt-[10px]'>
            <div>
            <h1 className='text-2xl font-medium'>{name}</h1>
            <h2 className='text-2xl font-medium mt-[10px]'>Price: ${price}</h2>
            </div>

            <div className='mt-[40px]'>
                <h3 className='text-lg font-medium  text-gray-600'>
                Manufacturer: {seller}
                </h3>
                <h4 className='text-lg font-medium  text-gray-600'>
                Rating : {ratings} Star
                </h4>
            </div>
            </div>
           <button onClick={()=>handleAddToCart(props.product)} className='bg-slate-400 w-[100%]  h-[50px] absolute bottom-0 hover:bg-orange-600'>Add to Cart</button> 
        </div>
    );
};

export default Product;
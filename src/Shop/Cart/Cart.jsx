import React from 'react';

const Cart = ({cart}) => {
    
    

    let total = 0;
    let totalShipping = 0;
    let quantity = 0;

    for(const product of cart){
        product.quantity = product.quantity || 1;
        total = total + product.price;
        totalShipping = totalShipping + product.shipping * product.quantity;
        quantity = quantity + product.quantity;
    }

    const tax1 = total*7/100;
    const tax = tax1.toFixed(2);
    const grantTotal1 = total+totalShipping+tax1
    const grantTotal = grantTotal1.toFixed(2);



    return (
        <div className='text-[#2A414F]'>
            <h1 className='text-center text-2xl font-bold my-5'>Order Summary</h1>
            <div className='pl-5 mt-[50px]'>
            <h4>Selected Items: {quantity}</h4>
            <h4 className='mt-6'>Total Price: ${total}</h4>
            <h4 className='mt-6'>Total Shipping Charge: ${totalShipping}</h4>
            <h4 className='mt-6'>Tax: ${tax}</h4>
            </div>
            <h1 className=' text-[21px] font-bold my-5 pl-5'>Grand Total: ${grantTotal}</h1>
            <div className='text-center mt-[71px] bg-[#FF3030] m-5 rounded-md'>
                <button className='h-[48px] w-[230px] text-white'>Clear Cart</button>
            </div>
            <div className='text-center mt-[13px] bg-[#F90] m-5 rounded-md'>
                <button className='h-[48px] w-[230px] text-white'>Review Order</button>
            </div>
        </div>
    );
};

export default Cart;
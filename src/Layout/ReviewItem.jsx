import React from "react";


const ReviewItem = ({ product, handleRemoveFromCart }) => {
  const { id, img, price, name, quantity } = product;
  return (
    <div className="w-[110%]  lg:w-[571px]  border-2 border-solid border-#95A0A7 p-2 rounded-md mt-5 bg-slate-300 flex items-center">
      <img className="w-[91px] rounded-md" src={img} alt="" />

      <div className="w-[110%]  lg:w-[571px] lg:h-[107px] flex justify-between items-center">
        <div className="ml-4 mb-2">
            <p className="text-2xl font-semibold">{name}</p>
            <p className="text-xl font-medium text-gray-700">Price: <span className="text-orange-500">${price}</span></p>
            <p className="text-xl font-medium text-gray-700">Order Quantity: <samp className="text-orange-500">{quantity}</samp></p>
        </div>
        <div>
          <button onClick={()=>handleRemoveFromCart(id)} className="mr-3"><img className="w-[50px]" src="https://secure.webtoolhub.com/static/resources/icons/set115/c2c12655.png" alt="" /></button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;

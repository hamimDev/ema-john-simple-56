import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import { getShoppingCart } from '../fakeData/fakedb';

const Shop = (props) => {

    const {setCart} = props;
    
    const [products , steProducts] = useState([]);
    
    useEffect( ()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data => steProducts(data));
    },[])

    
    useEffect( ()=>{
        
        const storedCart = getShoppingCart();
        const saveCart = [];
        
        for(const id in storedCart){
            // console.log(id);
            const addedProducts = products.find(product => product.id === id)
            if(addedProducts){
                const quantity = storedCart[id];
                addedProducts.quantity = quantity;
                saveCart.push(addedProducts);
            }
            console.log('added Product', addedProducts)   
        }
        setCart(saveCart);
        
    },[products])

    

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3'>
            {
                products.map(product => <Product
                    handleAddToCart ={props.handleAddToCart} 
                    key = {product.id}
                    product ={product}
                    
                ></Product>)
            }
        </div>
    );
};

export default Shop;
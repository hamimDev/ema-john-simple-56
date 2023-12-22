import { getShoppingCart } from "../fakeData/fakedb";

const cardProductLoader = async ()=>{
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();
    
    const storedCart = getShoppingCart();
    
    const saveCart = [];
    for(const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            saveCart.push(addedProduct);
        }
    }


    return saveCart;
}

export default cardProductLoader;
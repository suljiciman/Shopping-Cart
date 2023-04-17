import React from 'react';
import ProductList from '../components/ProductList';
import Product from '../components/Product';

const ProductPage = () => {
    const cart = [
        {title: 'Book', quantity: 3, price: 20},
        {title: 'TV', quantity: 1, price: 820},
        {title: 'Bread', quantity: 1, price: 2},
        {title: 'T-Shirt', quantity: 5, price: 10},
        {title: 'Socks', quantity: 7, price: 4}
        ];   
        


return  (
    <div>
<main>
<h1>Shop Shop SHop Soph sohp shop PosH</h1>
<ProductList products={cart}/>
<h1>Summary</h1>
<h2>Total </h2>

</main>
    </div>
   


)
}

export default ProductPage;

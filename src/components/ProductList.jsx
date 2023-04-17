import React from 'react';
import Product from '../components/Product';

const ProductList = (props) =>{
    const productList = props.products.map((cart) =>  {
        return <Product title = {cart.title} price={cart.price} quantity={cart.quantity}/>});
        return <ul>{productList}</ul>
    }


export default ProductList;
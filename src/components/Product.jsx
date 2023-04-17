import React from 'react';

const Product = (props) =>{
return(
    <li>
        <h1>{props.title}</h1>
        <h3>US ${props.price}</h3>
        <h4>{props.quantity}</h4>
        <button>buy</button>
    </li>
    
)
}

export default Product;

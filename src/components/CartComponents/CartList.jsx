import React from 'react';
import '../../App.css';
import CartItem from './CartItem'


function CartList(props) {

  return (
    <div>
            {props.data.cart.map(product=>
                <CartItem key={product.id} 
                          product={product} 
                          data={props.data}/>
            )}
    </div>
  );
}

export default CartList;
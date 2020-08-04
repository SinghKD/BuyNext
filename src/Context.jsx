import React, {createContext} from 'react';
import {Products, detailProduct} from './data'
import { useState } from 'react';
import { useEffect } from 'react';



export const DetailContext = createContext();

export const DetailProvider = props => {

  const [state, setState] = useState({products: [], 
                                      detailProduct: detailProduct,
                                      cart: [],
                                      total: 0,
                                      tax: 0,
                                      amount: 0
                                      });
  
  useEffect(() => {
    setProducts()
  }, [])

  function setProducts(){
    let products = [];

    Products.forEach(product => {
      const oneProduct = {...product}
      products = [...products, oneProduct]
    })
    const cart = state.cart
    setState({products, detailProduct, cart, total:state.total, tax: state.tax, amount: state.amount})
  }

  const showDetail = id =>{
    const product = state.products.find(prod => prod.id===id)
    const products = state.products
    const cart = state.cart
    setState({products, detailProduct: product, cart, total:state.total, tax: state.tax, amount: state.amount})
  }

  const addToCart = id =>{  
    let products = [...state.products];
    const ind = products.indexOf(state.products.find(prod => prod.id===id));
    const product = products[ind];
    product.inCart = true;
    product.count = 1;
    product.total = product.price;
    const dp = state.detailProduct;
    const total = state.total + product.total;
    const tax = parseFloat((total*0.15).toFixed(0));
    const amount = total + tax;
    setState({products, detailProduct: dp, cart: [...state.cart, product], total, tax, amount});
  }  

  const increaseQuantity = id => {
    let cart = [...state.cart];
    const ind = cart.indexOf(state.products.find(prod => prod.id===id));
    const product = cart[ind];
    product.count++;
    product.total += product.price;
    const total = state.total + product.price;
    const tax = parseFloat((total*0.15).toFixed(0));
    const amount = total + tax;
    const products = state.products;
    setState({products, detailProduct, cart, total, tax, amount});
  }

  const decreaseQuantity = id =>{
    let cart = [...state.cart];
    const ind = cart.indexOf(state.products.find(prod => prod.id===id));
    const product = cart[ind];
    if(product.count === 1)
      removeProduct(id);
    else{
      product.count--;
      product.total -= product.price;
      const total = state.total - product.price;
      const tax = parseFloat((total*0.15).toFixed(0));
      const amount = total + tax;
      const products = state.products;
      setState({products, detailProduct, cart, total, tax, amount});
    }
  }

  const removeProduct = id =>{
    let cart = [...state.cart];
    let products = [...state.products];

    cart = cart.filter(product => product.id !== id);
    const ind = products.indexOf(state.products.find(prod => prod.id===id));
    const product = products[ind];
    const total = state.total - product.total;
    const tax = parseFloat((total*0.15).toFixed(0));
    const amount = total + tax;
    product.inCart = false;
    product.count = 0;
    product.total = 0;

    setState({products, detailProduct, cart, total, tax, amount});
  }

  const clearCart = ()=> {
    let products = [...state.products];
    products.forEach(product => {
      product.inCart = false;
      product.count = 0;
      product.total = 0;
    });

    const cart = [];

    setState({products, detailProduct, cart, total:0, tax:0, amount:0});
  }


  return (
    <DetailContext.Provider value={{...state, 
                                    addToCart: addToCart, 
                                    showDetail:showDetail,
                                    increaseQuantity: increaseQuantity,
                                    decreaseQuantity: decreaseQuantity,
                                    removeProduct: removeProduct,
                                    clearCart: clearCart}}>
      {props.children}
    </DetailContext.Provider>
  );
}



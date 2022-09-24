import React from 'react'
import { Link } from 'react-router-dom';
import './Cart.css'
import CartItem from './CartItem/CartItem';

function Cart({cart, handleUpdateCartQty,handleRemoveCart,handleEmptyCart}) {
    

    const EmptyCart=()=>(
        <>
             <h2 className='empty-cart'>You have no items in your shopping cart</h2>
             <Link to='/' className='go-back'>start adding some!</Link>
        </>
    )

    const FilledCart=()=>(
        <>
        {
            cart.line_items.map((item)=>(
                <div className='each-cart-container' key={item.id}>

              <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveCart} />

                </div>
            )) }
            <div className='cart-details'>
                <h4>Subtotal: {cart.subtotal.formatted_with_symbol}</h4>
            </div>

            <div className='buttons'>
                <button onClick={handleEmptyCart} className='empty-cart-btn'>Empty Cart</button>
              <Link to='/checkout'>
              <button className='check-out-btn'>Check Out</button>
              </Link>
            </div>

        </>

    );

    if(!cart.line_items) return 'Loading...'

  return (
    <div className='shopping-cart-container'>
        <h3>Your Shopping Cart</h3>
        { !cart.line_items.length ? <EmptyCart/> : <FilledCart/>}
      
    </div>
  )
}

export default Cart

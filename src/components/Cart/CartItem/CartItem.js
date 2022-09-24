import React from 'react'
import './CartItem.css'

function CartItem({item, onUpdateCartQty,onRemoveFromCart}) {
    console.log(item)
  return (
    <div className='cartItem-container'>
        <img src={item.image.url}  alt={item.name}/>
        <div className='cartItem-content'>
           <div className='cartItem-price-container'>
           <h4>{item.name}</h4>
            <h5>{item.line_total.formatted_with_symbol}</h5>
           </div>

           <div className='cardItem-btn'>
            <button className='increment' onClick={()=>onUpdateCartQty(item.id, item.quantity-1)}>-</button>
            <p>{item.quantity}</p>
            <button className='decrement' onClick={()=>onUpdateCartQty(item.id, item.quantity+1)}>+</button>
           </div>
           <div className='remove-cart' onClick={()=> onRemoveFromCart(item).id}>
               <button>Remove</button>

           </div>

        </div>
    </div>
  )
}

export default CartItem

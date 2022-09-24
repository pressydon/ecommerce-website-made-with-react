import React from 'react';

import Product from './product/Product';
import './Products.css';







function Products({products, onAddToCart}) {
  return (
    <main>
        <div className='products-container'>
            {
                products.map((product)=>(
                    <div  key={product.id} className='individual-product' >
                      <Product product={product} onAddToCart={onAddToCart}/>
                    </div>
                ))
            }
        </div>
       
    </main>
  )
}

export default Products


import React from 'react';

import './Product.css'





const Product = ({ product, onAddToCart }) => {

  console.log(product)


  return (
    <div className='product-root'>
      <img src={product.image.url} />
      <div className='card-content'> 
     <div className='price-column'>
     <h5>{product.name}</h5>
      <h5>{product.price.formatted_with_symbol}</h5>
     </div>
     <p dangerouslySetInnerHTML={{__html:product.description}}/>
      </div>

      <div className='cart-button' onClick={()=>onAddToCart(product.id, 1)}>
        <i className='fas fa-shopping-cart'></i>
      </div>
   

    </div>
   
  );
};

export default Product;



 // <Card className={classes.root}>
    //   <CardMedia className={classes.media} image={product.media.source} title={product.name} />
    //   <CardContent>
    //     <div className={classes.cardContent}>
    //       <Typography gutterBottom variant="h5" component="h2">
    //         {product.name}
    //       </Typography>
    //       <Typography gutterBottom variant="h5" component="h2">
    //         ${product.price.formatted}
    //       </Typography>
    //     </div>
    //     <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
    //   </CardContent>
    //   <CardActions disableSpacing className={classes.cardActions}>
    //     <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
    //       <AddShoppingCart />
    //     </IconButton>
    //   </CardActions>
    // </Card>

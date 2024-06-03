import React from 'react';
import './Product.css';
const Product = (props) => {
   
    const {img,name,text,age,time}=props.product;    
    return (
        <div className='product'>   
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>                
                <p>{text}</p>
                <p className='product-name'>{age}</p>
                <p className='product-name'>Time Req:{time}</p> 
            </div>
            <button onClick={()=> props.handleAddToCart(props.product.time)} 
            className='btn-cart'>
                <p> Add to List</p>
           </button>          
                      
        </div>
    );
};

export default Product;


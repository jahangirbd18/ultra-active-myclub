import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import logo from '../../images-ultra/my_photo.jpg';
import TimeSelector from '../TimeSelector/TimeSelector';

const Shop = () => {
  const [products,setProducts]=useState([]);
const[time, setTime]=useState([]);

  useEffect(()=>{
          fetch('products_ultra.json')
          .then(res=>res.json())
          .then(data=>setProducts(data))          
       },[])
       const handleAddToCart=(product)=>{        
        const newTime=[...time,product]
        setTime(newTime); 
       }
      
    return (
        <div className='shop-container'>
          
            <div className="product-container">
              
             {
              products.map(product=><Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
              ></Product>)
             }
            </div>

            <div className="cart-container">
                         
                <div className='cart-header'>
                   <img src={logo} alt=""/>
                   <h2>MD. JAHANGIR HOSSAIN</h2> 
                </div>                                              
                    <div className='person'>
                       <div className='weight'> <p>75kg</p><p>Weight</p> </div>
                       <div className='height'><p>5.6</p><p>height</p></div>
                       <div className='age'> <p>25</p><p>years</p> </div>                                             
                   </div>  
                <div className='detail'>
                <h1> Add a Break(click): </h1>  
                     <TimeSelector></TimeSelector>
                    <div>
                    <h2>Exercise Time: 
                    {time.reduce((acc, curr) => acc + curr, 0)} s</h2>
                    </div>             
                                      
                </div>
                         
                <button className='button'><p> Activity Completed</p></button>                

            </div>                 
               
        </div>
        
           );
       };
   
export default Shop;


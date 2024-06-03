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
                   <h2>Md. Jahangir Hossain</h2> 
                </div>                                              
                    <div className='weight'>
                       <div>75kg</div>
                       <div>75kg</div>
                       <div>75kg</div>                       
                   </div>  
                <div className='detail'>
                <h1> Add a Break: </h1>  
                     <TimeSelector></TimeSelector>
                    <div>
                    <h2>Exercise Time: {time.reduce((acc, curr) => acc + curr, 0)} s</h2>
                    </div>             
                                      
                </div>
                         
                <button><p> Activity Completed</p></button>                

            </div>                 
               
        </div>
        
           );
       };
   
export default Shop;


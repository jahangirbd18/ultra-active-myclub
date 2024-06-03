import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
// import logo from '../../images-ultra/logo.jpg'
import logo from '../../images-ultra/my_photo.jpg';
import TimeSelector from '../TimeSelector/TimeSelector';
import selectedTime from '../TimeSelector/TimeSelector';

const Shop = () => {
  const [products,setProducts]=useState([]);
const[time, setTime]=useState([]);



  useEffect(()=>{
          fetch('products_ultra.json')
          .then(res=>res.json())
          .then(data=>setProducts(data))          
       },[])
       const handleAddToCart=(product)=>{
        
        const newTime=[... time,product]
        setTime(newTime);
    //     const totalTime = newTime.reduce((acc, curr) => acc + curr, 0);
    // console.log('Total Time:', totalTime);
        
       }
      
    return (
        <div className='shop-container'>
          
            <div className="product-container">
              
             {
              products.map(product=><Product
              key={product.id}
              product={product}
            //   time={product}
              handleAddToCart={handleAddToCart}
              ></Product>)
             }
            </div>

            <div className="cart-container">
           
                <div >
                    <div className='cart-header'>
                   <img src={logo} alt=""/>
                   <h3>Md. Jahangir Hossain</h3> 
                    </div>

                     <h3>Add a Break:</h3>
                <div className='time-selector'>
                
                    <TimeSelector></TimeSelector> 
                                  
                 </div>
                
                </div>
                 
                    <h3>Exercise Detail:</h3> 
                
                <div className='detail'>
                
                    <div>
                    <h3>Exercise Time: {time.reduce((acc, curr) => acc + curr, 0)} s</h3>
                    </div>            
                    
                       {/* {selectedTime !== null && (
                     <div> 
                          Selected Times: {selectedTime}s
                    </div>)}               */}

                    {/* Added 1 */}
                    
                    
                </div>
                        
                <button><p> Activity Completed</p></button>
                

            </div>       
                
               
        </div>
        
           );
       };

    //    Lift up 1 
    
export default Shop;


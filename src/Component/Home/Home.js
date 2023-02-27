import React from 'react'
import { useStateValue } from '../../Context/StateProvider'
import Slider from '../Horizontal-Slider/Slider'
import Bulletien from '../Bulletin/Bulletin'
import banks  from '../../img/bank.jpg'
import banner from '../../img/banner.jpeg'
import Loader from '../Loader'
import {MdShoppingBasket}from 'react-icons/md'
import { Link } from 'react-router-dom'
import axiosinstance from '../../Axios/Axios'
import { useHistory } from 'react-router-dom'
import{motion} from 'framer-motion'
function Home() {
 
  const history=useHistory()
  const addcart=(_product,quantity,price,productPicture)=>{
    let cartItem={product:_product,quantity:quantity,price:price,productPicture:productPicture}
    if(!token)
    {
      history.push('/signin')
    }
    else{
    axiosinstance.post('/addTocart',{cartItem:cartItem})
    .then((res)=>{
      
      dispatch({
        type:'addcart',
        cart:res.data.cart.cartItem
      })
    })

    .catch((err)=>{
      console.log(err)
    })
    }


  }
    const [{token,product,catagories,cart},dispatch]=useStateValue()
    const _token=localStorage.getItem('user')
   const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   const day=["Monday","Tuesday","Wednesday","Thursday","Friday"]
    const today = new Date();
const yyyy = today.getFullYear();
let mm = months[today.getMonth() ]; // Months start at 0!
let dd = today.getDay();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const formattedToday = dd + '/' + mm + '/' + yyyy;
console.log('nnmnmnhmn',product)
   
  return (
   <>
    <div className='bg-gray-200 py-1 px-2 md:px-10  flex flex-col gap-7  w-full overflow-hidden'>
        <p className='mx-auto  font-serif font-semibold'>ከ 2,500 ብር በላይ ይገብዩና እቃዎን በነፃ በ አ.አ ያሉበት ድረስ እናድርስልዎ Free delivery in A.A for purchases of ETB 2,500 and above</p>
         <Bulletien img1={banks} img2={banner} className=''></Bulletien>
         <div className='flex justify-start flex-wrap    w-[full]    gap-2  '>
  
  {product && product.map((item)=>(
     <div data-aos="zoom-in-right"  key={item._id} className='bg-white border-2 border-gray-300 flex  justify-between items-center min-w-[150px] md:min-w-[310px] max-w-[200px] md:max-w-[310px] w-[79%] md:w-[310px] rounded-sm '>
        {item.productPicture && item.productPicture.map((pic)=>(
             
         <div key={pic._id} className='flex flex-col justify-between w-[350px]  h-[250px] md:h-[350px] items-center p-1 md:p-3  '>
                      
          <motion.img initial={{y:-200}} animate={{y:10}} whileHover={{scale:1.24}} src={pic.img} className='w-[90%] md:w-[60%]'/>
          <p className='m-1 md:m-3 font-serif font-sm  md:font-medium'>{item.Description}</p>
          <div className='flex justify-between w-full items-center'>
           <p className=' font-thin font-serif text-sm'>BUY NOW</p>
           <p className='font-sm md:font-medium font-serif'>{item.price}ETB</p>
           </div>
           <div className=' flex flex-col md:flex-row items-center w-full justify-between  '>
            <div className='flex'>
            <p className='bg-gray-500 rounded-sm py-1 px-4 text-white'>Qty</p>
             <select className=' border-2 border-gray-200 px-3'>
               <option>1</option>
               <option>2</option>
               <option>3</option>
               <option>4</option>
               <option>5</option>
             </select>
            </div>
             <div className='border-1 border-gray-300 bg-orange-400 hover:bg-orange-600 text-white font-serif flex p-1 w-[95%] md:w-[50%] md:p-2 cursor-pointer' onClick={()=>{addcart(item._id,item.quantity,item.price,item.productPicture[0].img)}}>
               <MdShoppingBasket></MdShoppingBasket>
               <motion.p whileTap={{scale:1.2}}>Add to Cart</motion.p>
             </div>
           </div>
          
          

         </div>
                 
              
              
             
        ))}
        
       
        
        

     </div>
   ))}
  
  </div>
  <Link to='/Contact'>Contact us</Link>
  <Link to='/About'>About us</Link>
  <div className='pt-2'>
        <p>{formattedToday }</p>
        
  <p className='text-gray-400 font-serif'>©   Copyright 2023 naty ENGINEERING PLC  All Rights Reserved. No part of this web page may be reproduced in any way without the prior written permission of naty ENGINEERING PLC </p>
    </div>

    </div>
   
   </>
  )
}

export default Home
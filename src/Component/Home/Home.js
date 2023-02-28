
import Bulletien from '../Bulletin/Bulletin'
import billboard from '../../img/chris.webp'
import banks  from '../../img/bank.jpg'
import { useEffect } from 'react'
import {useStateValue} from '../../Context/StateProvider'

import {MdShoppingBasket,MdChevronRight,MdChevronLeft}from 'react-icons/md'
import{motion} from 'framer-motion'
import axiosinstance from '../../Axios/Axios'
import { useHistory } from 'react-router-dom'
import Loader from '../Loader'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init();

  }, [])
  let initialpage=0
  const history=useHistory()
  const [{token,product,catagories,cart},dispatch]=useStateValue()

    product && product.sort(()=> 0.5 - Math.random()) 
    product && console.log(product.length)
    product && product.splice(0,product.length-8)




    const nextpage=()=>{
       initialpage=initialpage+1
      axiosinstance.get('/getProduct', {
        params: {
          p: initialpage,
    }})
      .then((res)=>{
        if(res.status == '200')
        {
           dispatch({
            type:'getProduct',
            product:res.data.message
           })


        }
      })
      .catch((err)=>{
        console.log(err)
      })
    }
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
    return(
      <div className='bg-gray-200 py-1 px-2 md:px-10  flex flex-col gap-7  w-full overflow-hidden'>
        <p className='mx-auto  font-serif font-semibold'>ከ 2,500 ብር በላይ ይገብዩና እቃዎን በነፃ በ አ.አ ያሉበት ድረስ እናድርስልዎ Free delivery in A.A for purchases of ETB 2,500 and above</p>
         <Bulletien img1={banks}  className=''></Bulletien>
         {!product && (<Loader></Loader>)}
         <div className='flex flex-wrap  md:justify-evenly  w-[full]  p-1  gap-2 md:w-[full]'>
         {product && product.map((item)=>(
            <div  key={item._id} className='bg-white border-2 border-gray-300 flex  justify-between items-center w-[49%] md:w-[310px]  '>
            <div data-aos="zoom-in-right"  key={item._id} className='bg-white border-2 border-gray-300 flex  justify-between items-center w-[49%] md:w-[310px]  '>
               {item.productPicture && item.productPicture.map((pic)=>(

                <div key={pic._id} className='flex flex-col justify-between h-[250px] md:h-[350px] items-center p-1 md:p-3  '>
                             
                 <motion.img initial={{y:-200}} animate={{y:10}} whileHover={{scale:1.24}} src={pic.img} className='w-[70%]'/>
                 <p className='m-1 md:m-3 font-serif font-medium'>{item.Description}</p>
                 <div className='flex justify-between w-full items-center'>
                  <p className=' font-thin font-serif text-sm'>BUY NOW</p>
                  <p className='font-medium font-serif'>{item.price}ETB</p>
                  </div>
                  <div className=' flex flex-col md:flex-row items-center w-full justify-between  '>
                   <div className='flex'>
                   <p>Qty</p>
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                   </div>
                    <div className='border-1 border-gray-300 bg-orange-400 hover:bg-orange-600 text-white font-serif flex p-1 w-full md:w-[50%] md:p-3 cursor-pointer' onClick={()=>{addcart(item._id,item.quantity,item.price,item.productPicture[0].img)}}>
                      <MdShoppingBasket></MdShoppingBasket>
                      <motion.p whileTap={{scale:1.2}}>Add to Cart</motion.p>
                    </div>
                  </div>
                 
                 
                </div>
                        
                     
                     
                    
               ))}
               
         </div>
         </div>
                
                ))}
                </div>
                </div>
         
    )
    
      

         
  
}

export default Home
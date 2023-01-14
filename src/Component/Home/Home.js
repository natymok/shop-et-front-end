import React from 'react'
import { useStateValue } from '../../Context/StateProvider'
import Slider from '../Horizontal-Slider/Slider'
import Bulletien from '../Bulletin/Bulletin'
import banks  from '../../img/bank.jpg'
import banner from '../../img/banner.jpeg'
import Loader from '../Loader'
import { Link } from 'react-router-dom'
function Home() {
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
   
  return (
   <>
    <div className='bg-gray-200 py-1 px-2 md:px-10  flex flex-col gap-7  w-full'>
        <p className='mx-auto  font-serif font-semibold'>ከ 2,500 ብር በላይ ይገብዩና እቃዎን በነፃ በ አ.አ ያሉበት ድረስ እናድርስልዎ Free delivery in A.A for purchases of ETB 2,500 and above</p>
         <Bulletien img1={banks} img2={banner} className=''></Bulletien>
         {!product && (<Loader></Loader>)}
      <Slider top='600' product={product}></Slider>
      <h1 className='text-serif font-bold text-2xl'>Food & Beverages</h1>
      <Slider top='1000' product={product&& product.filter((pro)=>(
      pro.catagory=='63942a52a3bb313ede4f8597'

  ))}></Slider>   
      <h1 className='text-serif font-bold text-2xl'>Electronics</h1>
      <Slider top='1600' product={product&& product.filter((pro)=>(
      pro.catagory=='639429c9a3bb313ede4f8592'

  ))}></Slider>
  <Link to='/Contact'>Contact us</Link>
  <Link to='/About'>About us</Link>

    </div>
    <div className='pt-2'>
        <p>{formattedToday }</p>
        
  <p className='text-gray-400 font-serif'>©   Copyright 2023 naty ENGINEERING PLC  All Rights Reserved. No part of this web page may be reproduced in any way without the prior written permission of naty ENGINEERING PLC </p>
    </div>
   </>
  )
}

export default Home
import React from 'react'
import { useStateValue } from '../../Context/StateProvider'
import Slider from '../Horizontal-Slider/Slider'
import Bulletien from '../Bulletin/Bulletin'
import banks  from '../../img/bank.jpg'
import banner from '../../img/banner.jpeg'
import Loader from '../Loader'
function Home() {
    const [{token,product,catagories,cart},dispatch]=useStateValue()
    const _token=localStorage.getItem('user')
    console.log(_token,'tokken')
    console.log(product)
   
  return (
    <div className='bg-gray-200 py-1 px-10  flex flex-col gap-7  w-full'>
        <p className='mx-auto hidden md:block font-serif font-semibold'>ከ 2,500 ብር በላይ ይገብዩና እቃዎን በነፃ በ አ.አ ያሉበት ድረስ እናድርስልዎ Free delivery in A.A for purchases of ETB 2,500 and above</p>
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
    </div>
  )
}

export default Home
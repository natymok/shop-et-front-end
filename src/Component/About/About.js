import React from 'react'
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <div className='my-auto p-5 md:p-10'>
         <Link to='/' className="text-md text-orange-600 font-bold ml-[30%]">back to home</Link>
    <p className=' text-black text-lg md:text-medium font-serif'>
    Etshop-online is an online marketplace, unique in its kind in Ethiopia, being promoted by naty Engineering PLC.



   it has managed to couple its business with technology fully digitizing its activities, investing in the implementation of an enterprise resource planning (ERP) software, which facilitated the establishment of Etshop-online.

 We envision to be the leading online trade platform for end users to find anything and pay the right price. Oftentimes, manufacturers and wholesalers have difficulties reaching end users and the later end up paying more than the value added by the supply chain. We therefore aim to attract buyers and sellers to our online marketplace for better trading with high valued services.

 


The promoter of the platform is also the founder and owner of naty Engineering PLC.

    </p>
    </div>
  )
}

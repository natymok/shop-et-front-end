import React from 'react'
import {motion} from 'framer-motion'
function Bulletin({img}) {
  return (
    <div className='w-[100%] h-[250px] hidden md:flex  md:justify-center object-cover py-5 rounded-lg'>
          <motion.img initial={{x:'100vw'}} animate={{x:0}} className='w-[90%] object-cover' src={img}/>
      
      
      </div>
  )
}

export default Bulletin
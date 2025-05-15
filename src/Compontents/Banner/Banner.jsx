import React from 'react'
import Container from '../layout/Container'
import leptop from '../../assets/leptop.png'
function Banner() {
  return (
    <div className=' pt-[98px] pb-[500px] mb-[50px]'>
      <Container>
      <div className="relative">
         <div className="   text-center">
        <h1 className='font-secondary m-auto text-[56px] font-bold leading-[64px]  w-[796px] text-white mb-5 '>Get your work done with Management Tool</h1>
        <p className='font-secondary m-auto font-reguler text-lg w-[467px] leadinf-[32px] text-white'>The world's first project management platform that connects everything</p>
       </div>
       <div className=" relative mt-8 text-center">
        <input className=' w-[480px] py-5  border pl-6 bg-white outline-0 placeholder:text-gray-400; text-gray-400 rounded-[6px]' type="text" placeholder='Your business email' />
           <a className=' flex items-center cursor-pointer justify-center absolute top-[4px] left-[785px] my-[4px] mx-[4px] font-secondary font-medium text-lg h-[50px] w-[150px] bg-paimary rounded-[6px]   text-secondary'>Try for free</a>
       </div>
       <div className="">
        <img className='absolute index- bottom-[-797px] left-[-33px] '  src={leptop} alt="#leptop" />
       </div>
      </div>
      </Container>
    </div>
  )
}

export default Banner

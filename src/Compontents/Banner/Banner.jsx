import React from 'react'
import Container from '../layout/Container'
import leptop from '../../assets/leptop.png'
function Banner() {
  return (
    <div className='  md:pt-[98px] pb-[121px] md:pb-[500px] mb-[50px]'>
      <Container>
      <div className="relative">
         <div className="   text-center">
        <h1 className=' md:font-secondary m-auto text-[29px] md:text-[56px]  font-medium md:font-bold  leading-[44px] md:leading-[64px]  w-[366px] md:w-[796px] text-white mb-5 '>Get your work done with Management Tool</h1>
        <p className=' md:font-secondary m-auto font-reguler  text-[17px] md:text-lg w-[330px] md:w-[467px]  leading-[29px] md:leading-[32px] text-white'>The world's first project management platform that connects everything</p>
       </div>
       <div className=" relative mt-8  text-center">
        <input className=' md:w-[480px] py-5  border pl-6 bg-white outline-0 placeholder:text-gray-400; text-gray-400 rounded-[6px]' type="text" placeholder='Your business email' />
           <a className=' flex items-center cursor-pointer justify-center absolute  top-[10px] md:top-[4px] left-[286px] md:left-[785px] md:my-[4px]   md:mx-[4px] font-secondary  font-reguler md:font-medium text-[15px] md:text-lg  h-[44px] md:h-[50px] w-[81px] md:w-[150px] bg-paimary rounded-[6px]   text-secondary'>Try for free</a>
       </div>
       <div className="">
        <img className='absolute index- bottom-[-230px] md:bottom-[-797px]  left-[-15px] md:left-[-33px] '  src={leptop} alt="#leptop" />
       </div>
      </div>
      </Container>
    </div>
  )
}


export default Banner

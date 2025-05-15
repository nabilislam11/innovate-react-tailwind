import React from 'react'
import Container from '../layout/Container'
import frame1 from '../../assets/frame1.png'
import frame2 from '../../assets/frame2.png'
import frame3 from '../../assets/frame3.png'
import frame4 from '../../assets/frame4.png'
import frame5 from '../../assets/frame5.png'
import intergrationlogo from '../../assets/intergrationlogo.png'

function Intergration() {
  return (
    <div className="relative">
            <Container>
            <div className=' flex justify-between' >
        <div className=" pt-[173px]">
            <h5 className=' font-secondary font-medium text-[20px] text-highlith '>Integrations</h5>
        <h1 className='w-[587px] font-paimary font-bold text-[46px] leading-[58px] text-tittle pt-[4px] '>Easily integrate with your favorite apps</h1>
            <p className='font-secondary font-reguler text-lg leading-[32px] w-[533px] text-details pt-[20px] pb-[40px]  '>App integration, in a general sense, is the process of bringing resources or capabilities from one application to another. As the world of apps continues to evolve, app integration is becoming expected in many contexts.
            </p>
             <a className=' font-secondary font-medium text-lg py-[20px] px-[48px] bg-secondary rounded-[6px] text-white'>Get Started</a>
        </div>

        <div className="  pt-[124px] ">
            <div className="flex  justify-between">
                <img className='py-[45px] px-[64px]  bg-white ' src= {frame1} alt="#frame1" />
                <img className='py-[48px] px-[88px]  bg-white  ' src={frame2} alt="#frame2" />
            </div>
            <div className=" flex justify-between">
                <img className='py-[45px] px-[30px] ' src={frame3} alt="#frame3" />
                <img src= {frame4} alt="#frame4" />
                <img src= {frame5} alt="#frame5" />

            </div>
        </div>


    </div>
    </Container>
    <div className="">
        <img className='absolute bottom-[-163] left-[53px] ' src={intergrationlogo} alt="#intergrationlogo" />
    </div>
    </div>

  )
}

export default Intergration
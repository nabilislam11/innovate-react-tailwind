import React from 'react'
import Container from '../layout/Container'
import frame1 from '../../assets/frame1.png'
import frame2 from '../../assets/frame2.png'
import frame3 from '../../assets/frame3.png'
import frame4 from '../../assets/frame4.png'
import frame5 from '../../assets/frame5.png'
import frame6 from '../../assets/frame6.png'
import frame7 from '../../assets/frame7.png'
import frame8 from '../../assets/frame8.png'
import intergrationlogo from '../../assets/intergrationlogo.png'

function Intergration() {
    return (
        <div className="relative bg-[#F4FAFA] ">
            <Container>
                <div className=' flex justify-between ' >
                    <div className=" py-[173px]">
                        <h5 className=' font-secondary font-medium text-[20px] text-highlith '>Integrations</h5>
                        <h1 className='w-[587px] font-paimary font-bold text-[46px] leading-[58px] text-tittle pt-[4px] '>Easily integrate with your favorite apps</h1>
                        <p className='font-secondary font-reguler text-lg leading-[32px] w-[533px] text-details pt-[20px] pb-[40px]  '>App integration, in a general sense, is the process of bringing resources or capabilities from one application to another. As the world of apps continues to evolve, app integration is becoming expected in many contexts.
                        </p>
                        <a className=' font-secondary font-medium cursor-pointer  text-lg py-[20px] px-[48px] bg-secondary rounded-[6px] text-white'>Get Started</a>
                    </div>

                    <div className="  pt-[109px] pb-[135px] ">
                        <div className="flex  justify-between w-[694px] mb-[35px]">
                            <div className=" flex w-[332px] h-[142px] bg-white rounded-[12px] items-center  justify-center ">  <img src={frame1} alt="#frame1" /></div>
                            <div className=" flex items-center   justify-center w-[332px] h-[142px] bg-white rounded-[12px]">   <img src={frame2} alt="#frame2" /></div>
                        </div>
                        <div className=" flex justify-between  w-[694px] mb-[35px]">
                            <div className=" flex items-center   justify-center  w-[151px] h-[142px] bg-white rounded-[12px]   "> <img src={frame3} alt="#frame3" /></div>
                            <div className="flex items-center   justify-center  w-[332px] h-[142px] bg-white rounded-[12px]"><img src={frame4} alt="#frame4" /></div>
                            <div className="flex items-center   justify-center  w-[151px] h-[142px] bg-white rounded-[12px]">  <img src={frame5} alt="#frame5" /></div>

                        </div>
                        <div className=" flex justify-between  w-[694px] mb-[35px]">
                            <div className=" flex items-center   justify-center  w-[290px] h-[142px] bg-white rounded-[12px]   "> <img src={frame6} alt="#frame6" /></div>
                            <div className="flex items-center   justify-center  w-[151px] h-[142px] bg-white rounded-[12px]"><img src={frame7} alt="#frame7" /></div>
                            <div className="flex items-center   justify-center  w-[196px] h-[142px] bg-white rounded-[12px]">  <img src={frame8} alt="#frame8" /></div>

                        </div>

                    </div>

                </div>
            </Container>
            <img className='absolute bottom-[-10px] left-[53px] ' src={intergrationlogo} alt="#intergrationlogo" />
        </div>

    )
}

export default Intergration
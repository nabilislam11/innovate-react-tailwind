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
                <div className=' md:flex justify-between ' >
                    <div className=" text-center md:text-start  py-[35px] md:py-[173px]">
                        <h5 className=' font-secondary font-medium text-[20px] text-highlith '>Integrations</h5>
                        <h1 className=' w-[361px] md:w-[587px] font-paimary font-bold  text-[36px] md:text-[46px] leading-[51px] md:leading-[58px] text-tittle pt-[4px] '>Easily integrate with your favorite apps</h1>
                        <p className='font-secondary font-reguler text-[17px] md:text-lg leading-[29px] md:leading-[32px]   w-[361px] md:w-[533px] text-details pt-[20px] pb-[40px]  '>App integration, in a general sense, is the process of bringing resources or capabilities from one application to another. As the world of apps continues to evolve, app integration is becoming expected in many contexts.
                        </p>
                        <a className=' font-secondary font-medium cursor-pointer  text-lg py-[20px] px-[48px] bg-secondary rounded-[6px] text-white'>Get Started</a>
                    </div>

                    <div className=" pt-[55px] md:pt-[109px]  pb-[37px] md:pb-[135px] ">
                        <div className="flex flex-col md:flex-row   justify-between lg:w-[694px] w-full mb-[35px]">
                            <div className=" flex lg:w-[332px] w-full h-[142px] bg-white rounded-[12px] items-center  justify-center ">  <img src={frame1} alt="#frame1" /></div>
                            <div className="  flex items-center   justify-center  lg:w-[332px] w-full h-[142px] bg-white rounded-[12px]">   <img src={frame2} alt="#frame2" /></div>
                        </div>
                        <div className=" flex flex-col md:flex-row  justify-between  lg:w-[694px] w-full mb-[35px]">
                            <div className="  flex items-center    justify-center   lg:w-[151px] w-full  h-[142px] bg-white rounded-[12px]   "> <img src={frame3} alt="#frame3" /></div>
                            <div className="flex items-center   justify-center  lg:w-[332px] w-full h-[142px] bg-white rounded-[12px]"><img src={frame4} alt="#frame4" /></div>
                            <div className="flex items-center   justify-center  lg:w-[151px] w-full h-[142px] bg-white rounded-[12px]">  <img src={frame5} alt="#frame5" /></div>

                        </div>
                        <div className=" flex flex-col md:flex-row   md:justify-between  lg:w-[694px] w-full mb-[35px]">
                            <div className=" flex items-center   justify-center  lg:w-[290px] w-full h-[142px] bg-white rounded-[12px]   "> <img src={frame6} alt="#frame6" /></div>
                            <div className="flex items-center   justify-center  lg:w-[151px] w-fullu h-[142px] bg-white rounded-[12px]"><img src={frame7} alt="#frame7" /></div>
                            <div className="flex items-center   justify-center  lg:w-[196px] w-full h-[142px] bg-white rounded-[12px]">  <img src={frame8} alt="#frame8" /></div>

                        </div>

                    </div>

                </div>
            </Container>
           <div className="hidden md:block"> <img className='absolute bottom-[-10px] left-[53px] ' src={intergrationlogo} alt="#intergrationlogo" /></div>
        </div>

    )
}

export default Intergration
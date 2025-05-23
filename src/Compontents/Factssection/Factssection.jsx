import React from 'react'
import Container from '../layout/Container'
import illustration from '../../assets/illustration.png'



function Factssection() {
    return (
        <div>
            <Container>
                <div className="lg:flex    bg-[url('/src/assets/texter.png')] bg-no-repeat bg-secondary rounded-[40px] ">
                    <div className=" lg:mt-[44px] lg:ml-[41px] content-end"><img className='  ' src={illustration} alt="#illustration" />
                    </div>


                    <div className="py-[85px] ml-[45px] lg:items-center  md:items-center    ">
                        <h1 className=' font-paimary  text-[44px] font-bold  lg:w-[554px] w-full   text-white pb-[64px]'>Trusted by 35,000+ happy customers.</h1>
                        <div className=" lg:flex   lg:gap-[40px]  md:gap-y-2.5 ">
                            <div className="">
                                <h2 className='font-paimary font-black text-[44px] leading-[54px] text-white pb-[12px] '>720+</h2>
                                <p className='font-secondary font-medium text-lg leading-[32px] text-white w-[176px]'>Over 500 business powered with us</p> 
                                </div>
                            <div className="">
                                <h2 className='font-paimary font-black text-[44px] leading-[54px] text-white pb-[12px] '>4.9</h2>
                                <p className='font-secondary font-medium text-lg leading-[32px] text-white w-[176px]'>Rating on google play and app store</p> 
                                </div>
                            <div className="">
                                <h2 className='font-paimary font-black text-[44px] leading-[54px] text-white pb-[12px] '>200+</h2>
                                <p className='font-secondary font-medium text-lg leading-[32px] text-white w-[176px]'>Easily integrate with your favorite apps</p> 
                                </div>
                        </div>
                    </div>
                </div>

            </Container>

        </div>





    )
}

export default Factssection

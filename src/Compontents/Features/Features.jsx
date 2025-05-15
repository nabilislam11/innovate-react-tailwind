import React from 'react'
import Container from '../layout/Container'
import features from '../../assets/features.png'
import featureicon1 from '../../assets/featureicon1.png'
import featureicon3 from '../../assets/featureicon3.png'

function Features() {
  return (
    <div className="  pb-[55px]">
      <Container>
        <div className="relative flex justify-between">
          <div className="">
            <img className='absolute top-[0px] left-[-95px]' src={features} alt="#features" />
          </div>
          <div className=" pb-[204px] ">
            <h1 className='w-[553px] font-paimary font-bold text-[46px] text-tittle leading-[58px] tracking-tight-[-1px] pb-[64px] '>We provide features for your Business</h1>
            <div className="flex gap-[96px] pb-[40px] ">
              <div className=" ">
                <img src={featureicon1} alt="#featureicon" />
                <h2 className=' w-[215px]font-paimary font-bold text-[22px] leading-[32px] text-tittle pt-[14px] pb-[6px]' >Fast and Easy to use</h2>
                <p className='w-[220px] font-secondary text-details font-reguler text-lg  leading-[32px]'>Easily to convert API with just a few clicks</p>
              </div>

                <div className=" ">
                <img src={featureicon1} alt="#featureicon" />
                <h2 className=' w-[215px]font-paimary font-bold text-[22px] leading-[32px] text-tittle pt-[14px] pb-[6px]' >Fast and Easy to use</h2>
                <p className='w-[220px] font-secondary text-details font-reguler text-lg  leading-[32px]'>Easily to convert API with just a few clicks</p>
              </div>

            </div>



            <div className=" flex gap-[96px] items-end">
                <div className=" ">
                  <img src={featureicon3} alt="#featureicon" />
                  <h2 className=' w-[215px]font-paimary font-bold text-[22px] leading-[32px] text-tittle pt-[14px] pb-[6px]' >Get Organized</h2>
                  <p className='w-[220px] font-secondary text-details font-reguler text-lg  leading-[32px]'>From lists to boards, organize work your way. </p>
                </div>
                <a className=' font-secondary font-medium text-lg py-[20px] px-[48px] h-[60px] bg-secondary  leading-[20px] rounded-[6px] text-white'>Get Started</a>
              </div>

          </div>
        </div>
      </Container>
    </div>
  )
}

export default Features
import React from 'react'
import Container from '../layout/Container'
import features from '../../assets/features.png'
import featureicon1 from '../../assets/featureicon1.png'
import featureicon3 from '../../assets/featureicon3.png'

function Features() {
  return (
    <div className="  pb-[70px]">
      <Container>
        <div className=" md:flex justify-between relative">
          <div className="">
            <img className=' md:absolute top-[0px] left-[-95px]' src={features} alt="#features" />
          </div>
          <div className=" pb-0 md:pb-[204px] ">
            <h1 className='w-[365px] md:w-[553px] font-paimary font-bold text-[35px] md:text-[46px] text-tittle leading-[46px] md:leading-[58px] tracking-tight-[-1px] pb-[39px] md:pb-[64px] pt-[29px]md:'>We provide features for your Business</h1>
            <div className="  md:flex gap-[96px] pb-[40px] ">
              <div className=" justify-items-center text-center  ">
                <img src={featureicon1} alt="#featureicon" />
                <h2 className='w-[214px] md:w-[215px]font-paimary font-bold text-[21px] md:text-[22px] leading-[27px] md:leading-[32px] text-tittle pt-[11px] md:pt-[14px] pb-[6px]' >Fast and Easy to use</h2>
                <p className='  w-[214px] md:w-[220px] font-secondary text-details font-reguler  text-[17px] md:text-lg  leading-[29px] md:leading-[32px]'>Easily to convert API with just a few clicks</p>
              </div>

                <div className="justify-items-center text-center  ">
                <img  src={featureicon1} alt="#featureicon" />
                <h2 className=' w-[214px] md:w-[215px]font-paimary font-bold text-[21px] md:text-[22px] leading-[27px] md:leading-[32px] text-tittle pt-[11px] md:pt-[14px] pb-[6px]' >Fast and Easy to use</h2>
                <p className='w-[214px] md:w-[220px] font-secondary text-details font-reguler  text-[17px] md:text-lg  leading-[29px] md:leading-[32px]'>Easily to convert API with just a few clicks</p>
              </div>

            </div>



            <div className="   md:flex gap-[96px] items-end">
                <div className="justify-items-center text-center  ">
                  <img src={featureicon3} alt="#featureicon" />
                  <h2 className='w-[214px] md:w-[215px]font-paimary font-bold text-[21px] md:text-[22px] leading-[27px] md:leading-[32px] text-tittle pt-[11px] md:pt-[14px] pb-[6px]' >Get Organized</h2>
                  <p className='w-[214px] md:w-[220px] font-secondary text-details font-reguler  text-[17px] md:text-lg  leading-[29px] md:leading-[32px] mb-[37px] md:'>From lists to boards, organize work your way. </p>
                </div>
                <a className=' font-secondary font-medium cursor-pointer text-lg py-[20px] px-[48px] h-[60px] bg-secondary  leading-[20px] rounded-[6px] text-white :'>Get Started</a>
              </div>

          </div>
        </div>
      </Container>
    </div>
  )
}

export default Features
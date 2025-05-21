import React from 'react'
import Container from '../layout/Container'
import icon from '../../assets/icon.png'
import icon3 from '../../assets/icon3.png'
import icon2 from '../../assets/icon2.png'


function Content() {
    return (
        <div className=" pt-[75px] md:pt-[336px]  pb-[37px] md:pb-[160px] px-[50px]">
            <Container>
                <div className=" items-center md:flex justify-between ">
                    <h1 className=' w-[298px] md:w-[504px] font-paimary text-tittle font-medium md:font-bold text-[31px] md:text-[48px]  leading-[41px] md:leading-[58px]'>How simple is it to use our platform?</h1>
                    <p className='w-[290px] md:w-[530px] font-secondary text-details text-[15px] md:text-lg   leading-[28px] md:leading-[32px] pt-[15px] md:  '>This Innovate Con guide explores the most popular platforms and walks you through how to use them to grow your business.</p>
                </div>
                <div className=" md:flex gap-[200px]">
                    <div className=" text-center md:text-center">
                        <img className=' pt-[44px] md:pt-[116px] mx-auto' src={icon} alt="#icon" />
                        <h1 className=' w-[259px] md:w-[300px] font-paimary text-tittle font-bold text-[22px] md:text-[24px] leading-[32px] md:leading-[36px] pt-[26px] pb-[12px]'>Connect your website with just a few click</h1>
                        <p className='w-[266px] md:w-[300px] font-secondary text-details font-reguler text-[16px] md:text-lg leading-[26px] md:leading-[32px]'> Once your website is online, you can configure it, I will show you how to put your website online</p>
                    </div>
                    <div className="  text-center md:text-center">
                        <img className='pt-[44px] md:pt-[116px] mx-auto' src={icon3} alt="#icon" />
                        <h1 className='w-[259px] md:w-[300px] font-paimary text-tittle font-bold text-[22px] md:text-[24px] leading-[32px] md:leading-[36px] pt-[26px] pb-[12px]'>Login or sign up to be able use our platform</h1>
                        <p className='w-[266px] md:w-[300px] font-secondary text-details font-reguler text-[16px] md:text-lg leading-[26px] md:leading-[32px]'> This quickstart shows you how to use Identity Platform to sign in a user with an email and password. </p>
                    </div>
                    <div className="  text-center md:text-center">
                        <img className='pt-[44px] md:pt-[116px] mx-auto' src={icon2} alt="#icon" />
                        <h1 className='w-[259px] md:w-[300px] font-paimary text-tittle font-bold text-[22px] md:text-[24px] leading-[32px] md:leading-[36px] pt-[26px] pb-[12px]'>Take some sales data that you want</h1>
                        <p className='w-[266px] md:w-[300px] font-secondary text-details font-reguler text-[16px] md:text-lg leading-[26px] md:leading-[32px]'> Sell your data directly: The most straightforward method is to sell your data directly to another</p>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default Content
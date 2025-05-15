import React from 'react'
import Container from '../layout/Container'
import icon from '../../assets/icon.png'

function Content() {
    return (
        <div className="pt-[336px] pb-[160px] px-[50px]">
            <Container>
                <div className="flex justify-between ">
                    <h1 className=' w-[504px] font-paimary text-tittle font-bold text-[48px] leading-[58px]'>How simple is it to use our platform?</h1>
                    <p className=' w-[530px] font-secondary text-details text-lg leading-[32px]  '>This Innovate Con guide explores the most popular platforms and walks you through how to use them to grow your business.</p>
                </div>
                <div className=" flex gap-[200px]">
                    <div className=" text-center">
                        <img className='pt-[116px] mx-auto' src={icon} alt="#icon" />
                        <h1 className=' w-[300px] font-paimary text-tittle font-bold text-[24px] leading-[36px] pt-[26px] pb-[12px]'>Login or sign up to be able use our platform</h1>
                        <p className='w-[300px] font-secondary text-details font-reguler text-lg leading-[32px]'> This quickstart shows you how to use Identity Platform to sign in a user with an email and password. </p>
                    </div>
                    <div className=" text-center">
                        <img className='pt-[116px] mx-auto' src={icon} alt="#icon" />
                        <h1 className=' w-[300px] font-paimary text-tittle font-bold text-[24px] leading-[36px] pt-[26px] pb-[12px]'>Login or sign up to be able use our platform</h1>
                        <p className='w-[300px] font-secondary text-details font-reguler text-lg leading-[32px]'> This quickstart shows you how to use Identity Platform to sign in a user with an email and password. </p>
                    </div>
                    <div className=" text-center">
                        <img className='pt-[116px] mx-auto' src={icon} alt="#icon" />
                        <h1 className=' w-[300px] font-paimary text-tittle font-bold text-[24px] leading-[36px] pt-[26px] pb-[12px]'>Login or sign up to be able use our platform</h1>
                        <p className='w-[300px] font-secondary text-details font-reguler text-lg leading-[32px]'> This quickstart shows you how to use Identity Platform to sign in a user with an email and password. </p>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default Content
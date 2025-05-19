import React from 'react'
import Container from '../layout/Container'
import line from "../../assets/footerbg.png"
import logo from '../../assets/footerlogo.png'
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaLocationArrow } from "react-icons/fa6";





function Footer() {
  return (
    <Container>
      <div className="pt-[160px] pb-[124px]">
        <div className="   relative  bg-[#4347B7] rounded-[10px] h-[316px]  overflow-hidden p-[100px]  ">
          <img className=' absolute top-0 left-[100px] w-full' src={line} alt="" />
          <div className="flex justify-between text-center items-center ">
            <h1 className='font-paimary font-bold text-[46px] leading-[58px] text-white w-[577px]'>Don’t find the answer? contact us for any query.</h1>
            <button className='font-secondary font-medium text-lg leading-[20px] text-tittle py-[20px] px-[48px] rounded-[10px] bg-paimary relative z-50 '>Contact Us</button>
          </div>

        </div>
      </div>

      {/* BOTTOM PART */}
      <div className=" flex justify-between  pb-[86px] ">
        <div className="w-[25%] ">
          <img src={logo} alt="#logo" />
          <p className='w-[263px] font-secondary font-reguler text-[16px] leading-[28px] text-details pt=[26px] pb-[24px]  '>Build a modern and creative website with Innovate.</p>
          <div className=" flex gap-[6px]">
            <a className='py-[12px] px-[12px]  bg-gray-100 rounded-full ' href=""><FaGoogle /></a>
            <a className='py-[12px] px-[12px]  bg-gray-100 rounded-full ' href=""><FaTwitter /></a>
            <a className='py-[12px] px-[12px]  bg-gray-100 rounded-full ' href=""><FaInstagram />
            </a>
            <a className='py-[12px] px-[12px]  bg-gray-100 rounded-full ' href=""><TiSocialLinkedin />
            </a>
          </div>
        </div>


        <div className="flex justify-around w-[45%] ">
          <ul className='gap-[12px]'>
            <li className='font-secondary font-medium text-[18px] leading-[32px] pb-[8px] text-tittle'>Product</li>
            <li className='font-secondary font-reguler text-[16px] leading-[26px] text-details'>Landingpages</li>
            <li className='font-secondary font-reguler text-[16px] leading-[26px] text-details' >Pricing</li>
            <li className='font-secondary font-reguler text-[16px] leading-[26px] text-details' >Benefits</li>
            <li className='font-secondary font-reguler text-[16px] leading-[26px] text-details'>Features</li>
          </ul>
          <ul>
            <li className='font-secondary font-medium text-[18px] leading-[32px]  pb-[8px] text-tittle'>Company</li>
            <li className='font-secondary font-reguler text-[16px] leading-[26px] text-details'>About</li>
            <li className='font-secondary font-reguler text-[16px] leading-[26px] text-details' >Privacy Policy</li>
            <li className='font-secondary font-reguler text-[16px] leading-[26px] text-details' >Terms & Conditions</li>
            <li className='font-secondary font-reguler text-[16px] leading-[26px] text-details'>Partners</li>
            <li className='font-secondary font-reguler text-[16px] leading-[26px] text-details'>Contact</li>
          </ul>
          <ul>
            <li className='font-secondary font-medium text-[18px] leading-[32px]  pb-[8px] text-tittle'>Resources</li>
            <li className='font-secondary font-reguler text-[16px] leading-[26px] text-details'>Guides and resources</li>
            <li className='font-secondary font-reguler text-[16px] leading-[26px] text-details' >Blog</li>
            <li className='font-secondary font-reguler text-[16px] leading-[26px] text-details' >Tools</li>
            <li className='font-secondary font-reguler text-[16px] leading-[26px] text-details'>Support</li>
          </ul>
        </div>










        <div className=" w-[25%]">
          <h2 className='font-secondary font-medium text-[18px] leading-[32px] text-tittle'>Get Latest Updates</h2>
          <p className='w-[285px] font-secondary font-reguler text-[16px] leading-[28px] text-details pt-[18px] pb-[32px] ' >Subscribe to our newsletter and get many interesting things every week</p>

          <div className=" relative">          <input className=' pt-[16px] pb-[12px] pl-[18px] pr-[136px] border border-gray-100 font-optional font-reguler text-[12px] ' type="text" placeholder='Your Email Address' />
            <button className='p-[8px] bg-secondary text-white absolute  top-[9px] right-[56px] '><FaLocationArrow />
            </button></div>
        </div>
      </div>


      <div className="w-full  border-2 border-gray-100 "></div>
      <div className="font-final font-reguler  text-[14px] leading-[20px] text-details  pt-[24px] pb-[30px] ">© 2024 Innovate - All Right Reserved</div>


    </Container>
  )
}

export default Footer
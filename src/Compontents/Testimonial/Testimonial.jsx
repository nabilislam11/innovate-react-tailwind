import React from 'react'
import Container from '../layout/Container'
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import { FaArrowRight ,FaArrowLeft } from "react-icons/fa";


function SampleNextArrow(props) {
    const {  onClick } = props;
    return (
      <div className=" absolute h-[40px] w-[40px] bg-[#4347B7] rounded-full  text-[#fff] top-[50%] translate-y-[-50%] right-[10px] cursor-pointer z-50 duration-300 ease-in-out  hover:bg-black" onClick={onClick}>
      <FaArrowRight className=' absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]' />
     </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {  onClick } = props;
    return (
      <div className=" absolute h-[40px] w-[40px] bg-[#4347B7] rounded-full  text-[#fff] top-[50%] translate-y-[-50%] left-[10px] cursor-pointer z-50 duration-300 ease-in-out  hover:bg-black" onClick={onClick}>
       <FaArrowLeft className=' absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]' />
      </div>
     
    );
  }




function Testimonial() {


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
     nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    };
    return (

        <div className=" bg-[#F4FAFA]">
            <Container>
                <div className="flex justify-between  ">
                    <div className="py-[200px] w-[50%]">
                        <h1 className=' font-paimary   font-bold text-[46px] leading-[58px] text-tittle w-[594px]'>What they are talking
                            about us?</h1>
                        <p className='w-[503px] font-secondary  text-lg font-reguler  leading-[32px] text-details pt-[20px] pb-[40px]'>testimonials are evidence of customers talking about your product or service in their own words. At their best, they are authentic, descriptive.</p>
                        <a className='font-secondary  text-lg font-medium leading-[20px] py-[20px] px-[48px] bg-secondary rounded-[6px] text-white ' href="">Get Started</a>

                        <div className="flex relative mt-[85px]">
                            <div className="absolute top-0 left-0 w-[58px] h-[58px] rounded-full bg-red-500   border boder-1  "></div>
                            <div className="absolute top-0 left-[35px] w-[58px] h-[58px] rounded-full bg-red-500   border boder-1  "></div>
                            <div className="absolute top-0 left-[70px] w-[58px] h-[58px] rounded-full bg-red-500   border boder-1  "></div>
                            <div className="absolute top-0 left-[105px] w-[58px] h-[58px] rounded-full bg-red-500   border boder-1  "></div>


                            <div className="pl-[200px] ">
                                <div className="flex items-center ">
                                    <h1 className='font-paimary   font-black  text-[24px] leading-[36px] text-[#52C5B6] '>4.5</h1>
                                    <div className="w-[2px] h-[16px] bg-[#DADBE2] ml-[7px] mr-[14px] "></div>
                                    <div className="flex">
                                        <FaStar className='text-[#FDB400] ' />
                                        <FaStar className='text-[#FDB400] ' />
                                        <FaStar className='text-[#FDB400] ' />
                                        <FaStar className='text-[#FDB400] ' />
                                        <FaStar className='text-[#FDB400] ' />

                                    </div>

                                </div>
                                <p className=' font-secondary  text-lg font-medium  leading-[32px] text-details '>280k Total Review</p>



                            </div>
                        </div>
                    </div>
                   <div className=" w-[50%]">
                 
                      <Slider {...settings} >
                            <div className="">
                                <div className="relative py-[227px]">
                                <div className=" px-[60px] pt-[60px] pb-[50px] bg-white rounded-[20px]  ">
                                    <div className="absolute  top-[150px] left-[44px] w-[124px] h-[124px] rounded-full bg-gray-400 border-4 border-gray-100 ">

                                    </div>
                                    <p className='w-[567px] font-secondary  text-[22px] font-reguler  leading-[44px] text-[#6C6E81]  pb-[33px] '>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p>
                                    <div className="flex">
                                        <div className="">
                                            <h3 className='font-paimary   font-bold text-[#30344E] text-[24px] leading-[36px]'>Robert Fox</h3>
                                            <p className='font-secondary  text-[16px] font-reguler  leading-[26px] text-[#30344E] '>Digital Marketer</p>
                                        </div>
                                        <div className="flex">
                                            <FaStar size={25} className='text-[#FDB400] ' />
                                            <FaStar size={25} className='text-[#FDB400] ' />
                                            <FaStar size={25} className='text-[#FDB400] ' />
                                            <FaStar size={25} className='text-[#FDB400] ' />
                                            <FaStar size={25} className='text-[#FDB400] ' />
                                        </div>
                                    </div>
                                </div>

                                </div>
                            </div>
                              <div className="">
                                <div className="relative py-[227px]">
                                <div className=" px-[60px] pt-[60px] pb-[50px] bg-white  rounded-[20px]  ">
                                    <div className="absolute  top-[150px] left-[44px] w-[124px] h-[124px] rounded-full bg-gray-400 border-4 border-gray-100 ">

                                    </div>
                                    <p className='w-[567px] font-secondary  text-[22px] font-reguler  leading-[44px] text-[#6C6E81]  pb-[33px] '>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p>
                                    <div className="flex">
                                        <div className="">
                                            <h3 className='font-paimary   font-bold text-[#30344E] text-[24px] leading-[36px]'>Robert Fox</h3>
                                            <p className='font-secondary  text-[16px] font-reguler  leading-[26px] text-[#30344E] '>Digital Marketer</p>
                                        </div>
                                        <div className="flex">
                                            <FaStar size={25} className='text-[#FDB400] ' />
                                            <FaStar size={25} className='text-[#FDB400] ' />
                                            <FaStar size={25} className='text-[#FDB400] ' />
                                            <FaStar size={25} className='text-[#FDB400] ' />
                                            <FaStar size={25} className='text-[#FDB400] ' />
                                        </div>
                                    </div>
                                </div>

                                </div>
                            </div>
                           
                            
                            
                            
                        </Slider>
                   </div>
                      
                  


                </div>
            </Container>
        </div>
    )
}

export default Testimonial
import React from 'react'
import Container from '../layout/Container'
import user1 from '../../assets/user1.png'
import { FiCheck } from "react-icons/fi";
import user2 from '../../assets/user2.png'
import user3 from '../../assets/user3.png'

function Pricingtable() {
    return (
        <div className='  pt-[45px]  md:pt-[122px]  pb-[75px]  md:pb-[160px]  '>
            <Container>
                <div className=" text-center   ">
                    <h1 className='font-paimary  m-auto  font-bold text-[46px] leading-[58px] text-tittle lg:w-[624px] w-full '>Pricing Designed To Fit Your Business</h1>
                    <p className='font-paimary  text-[24px] font-bold leading-[100px] lg:pt-[39px] lg:pb-[52px] text-secondary ' >Monthly</p>
                </div>

                <div className=" lg:flex justify-between">
                    <div className="  lg:w-[31%] pb-[40px] mt-[15px] mb-[15px] border  border-[#DCE7FE]  rounded-[20px] group hover:bg-secondary transition-all duration-500   ">
                        <div className=" pt-[40px] text-center">
                            <div className="flex justify-center m-auto  items-center w-[90px] h-[90px] rounded-full bg-[#E8F2FA] group-hover:bg-white transition-all duration-500 ">
                                <img src={user1} alt="" />
                            </div>

                            <div className="text-center  ">
                                <p className='font-paimary  text-[24px] font-bold  leading-[36px]  text-secondary mt-[32px] mb-[2px] group-hover:text-[#43E7DF] transition-all duration-500  '>Personal</p>
                                <h2 className='font-paimary    font-bold text-[44px] leading-[54px] text-tittle group-hover:text-white transition-all duration-500 '>$10/mth</h2>
                                <p className='font-secondary m-auto text-[18px] font-medium leading-[18px] mt-[14px] mb-[40px] text-[#645E76]   group-hover:text-white transition-all duration-500  '>Annual pricing <span className='text-secondary  group-hover:text-white transition-all duration-500 '>(save 20%)</span> </p>
                            </div>

                            <div className="my-[40px] px-[60px]  ">

                                <div className=" flex mb-[26px]  ">
                                    <div className="flex justify-center  items-center w-[24px] h-[24px] rounded-full bg-[#E8F2FA]  group-hover:bg-white transition-all duration-500  ">
                                        <FiCheck className='' />
                                    </div>
                                    <p className='font-secondary  ml-[22px]  text-[18px] font-medium  leading-[32px]  text-details  group-hover:text-white transition-all duration-500 '>Calendar View</p>
                                </div>


                                <div className=" flex mb-[26px]  ">
                                    <div className="flex justify-center  items-center w-[24px] h-[24px] rounded-full bg-[#E8F2FA]  group-hover:bg-white transition-all duration-500  ">
                                        <FiCheck className='' />
                                    </div>
                                    <p className='font-secondary ml-[22px]  text-[18px] font-medium  leading-[32px]  text-details  group-hover:text-white transition-all duration-500 '>Custom Templates</p>
                                </div>


                                <div className=" flex mb-[26px]  ">
                                    <div className="flex justify-center  items-center w-[24px] h-[24px] rounded-full bg-[#E8F2FA]  group-hover:bg-white transition-all duration-500  ">
                                        <FiCheck className='' />
                                    </div>
                                    <p className='font-secondary ml-[22px]  text-[18px] font-medium  leading-[32px]  text-details  group-hover:text-white transition-all duration-500 '>list view</p>
                                </div>


                                <div className=" flex mb-[26px]  ">
                                    <div className="flex justify-center  items-center w-[24px] h-[24px] rounded-full bg-[#E8F2FA]  group-hover:bg-white transition-all duration-500  ">
                                        <FiCheck className='' />
                                    </div>


                                    <p className='font-secondary ml-[22px]  text-[18px] font-medium  leading-[32px]  text-details  group-hover:text-white transition-all duration-500 '>board view</p>
                                </div>


                                <div className=" flex  ">
                                    <div className="flex justify-center  items-center w-[24px] h-[24px] rounded-full bg-[#E8F2FA]  group-hover:bg-white transition-all duration-500  ">
                                        <FiCheck className='' />
                                    </div>
                                    <p className='font-secondary ml-[22px]  text-[18px] font-medium  leading-[32px]  text-details  group-hover:text-white transition-all duration-500 '>Assignees & Due Dates</p>
                                </div>




                            </div>
                            <a className=' font-secondary cursor-pointer font-medium text-lg leading--[20px]  py-5 px-[104px] text-white rounded-[6px] bg-secondary  group-hover:bg-[#43E7DF]  text-tittle   transition-all duration-500  '>Purchase Now</a>
                        </div>


                    </div>
                    <div className=" lg:w-[31%] pb-[40px]  mt-[15px] mb-[15px]  border  border-[#DCE7FE]  rounded-[20px] group hover:bg-secondary transition-all duration-500   ">
                        <div className=" pt-[40px] text-center">
                            <div className="flex justify-center m-auto  items-center w-[90px] h-[90px] rounded-full bg-[#E8F2FA] group-hover:bg-white transition-all duration-500 ">
                                <img src={user2} alt="" />
                            </div>

                            <div className="text-center  ">
                                <p className='font-paimary  text-[24px] font-bold  leading-[36px]  text-secondary mt-[32px] mb-[2px] group-hover:text-[#43E7DF] transition-all duration-500  '>Team</p>
                                <h2 className='font-paimary    font-bold text-[44px] leading-[54px] text-tittle group-hover:text-white transition-all duration-500 '>$25/mth</h2>
                                <p className='font-secondary m-auto text-[18px] font-medium leading-[18px] mt-[14px] mb-[40px] text-[#645E76] w-[320px]  group-hover:text-white transition-all duration-500  '>Annual pricing (save 35%) <span className='text-secondary'>(save 20%)</span> </p>
                            </div>

                            <div className="my-[40px] px-[60px]  ">

                                <div className=" flex mb-[26px]  ">
                                    <div className="flex justify-center  items-center w-[24px] h-[24px] rounded-full bg-[#E8F2FA]  group-hover:bg-white transition-all duration-500  ">
                                        <FiCheck className='' />
                                    </div>
                                    <p className='font-secondary ml-[22px]  text-[18px] font-medium  leading-[32px]  text-details  group-hover:text-white transition-all duration-500 '>Timeline Review</p>
                                </div>


                                <div className=" flex mb-[26px]  ">
                                    <div className="flex justify-center  items-center w-[24px] h-[24px] rounded-full bg-[#E8F2FA]  group-hover:bg-white transition-all duration-500  ">
                                        <FiCheck className='' />
                                    </div>
                                    <p className='font-secondary ml-[22px]  text-[18px] font-medium  leading-[32px]  text-details  group-hover:text-white transition-all duration-500 '>Custom fields</p>
                                </div>


                                <div className=" flex mb-[26px]  ">
                                    <div className="flex justify-center  items-center w-[24px] h-[24px] rounded-full bg-[#E8F2FA]  group-hover:bg-white transition-all duration-500  ">
                                        <FiCheck className='' />
                                    </div>
                                    <p className='font-secondary ml-[22px]  text-[18px] font-medium  leading-[32px]  text-details  group-hover:text-white transition-all duration-500 '>Custom Templates</p>
                                </div>


                                <div className=" flex mb-[26px]  ">
                                    <div className="flex justify-center  items-center w-[24px] h-[24px] rounded-full bg-[#E8F2FA]  group-hover:bg-white transition-all duration-500  ">
                                        <FiCheck className='' />
                                    </div>


                                    <p className='font-secondary ml-[22px]  text-[18px] font-medium  leading-[32px]  text-details  group-hover:text-white transition-all duration-500 '>Task dependencies</p>
                                </div>


                                <div className=" flex  ">
                                    <div className="flex justify-center  items-center w-[24px] h-[24px] rounded-full bg-[#E8F2FA]  group-hover:bg-white transition-all duration-500  ">
                                        <FiCheck className='' />
                                    </div>
                                    <p className='font-secondary ml-[22px]  text-[18px] font-medium  leading-[32px]  text-details  group-hover:text-white transition-all duration-500 '>Milestones Manage</p>
                                </div>




                            </div>
                            <a className=' font-secondary cursor-pointer font-medium text-lg leading--[20px] py-5 px-[104px] text-white rounded-[6px] bg-secondary  group-hover:bg-[#43E7DF]  text-tittle   transition-all duration-500  '>Purchase Now</a>
                        </div>


                    </div>
                    <div className=" lg:w-[31%] pb-[40px]  mt-[15px] mb-[15px]  border  border-[#DCE7FE]  rounded-[20px] group hover:bg-secondary transition-all duration-500   ">
                        <div className=" pt-[40px] text-center">
                            <div className="flex justify-center m-auto  items-center w-[90px] h-[90px] rounded-full bg-[#E8F2FA] group-hover:bg-white transition-all duration-500 ">
                                <img src={user3} alt="" />
                            </div>

                            <div className="text-center  ">
                                <p className='font-paimary  text-[24px] font-bold  leading-[36px]  text-secondary mt-[32px] mb-[2px] group-hover:text-[#43E7DF] transition-all duration-500  '>Enterprise</p>
                                <h2 className='font-paimary    font-bold text-[44px] leading-[54px] text-tittle group-hover:text-white transition-all duration-500 '>$50/mth</h2>
                                <p className='font-secondary m-auto text-[18px] font-medium leading-[18px] mt-[14px] mb-[40px] text-[#645E76] w-[320px]  group-hover:text-white transition-all duration-500  '>Annual pricing (save 40%) <span className='text-secondary'>(save 20%)</span> </p>
                            </div>

                            <div className="my-[40px] px-[60px]  ">

                                <div className=" flex mb-[26px]  ">
                                    <div className="flex justify-center  items-center w-[24px] h-[24px] rounded-full bg-[#E8F2FA]  group-hover:bg-white transition-all duration-500  ">
                                        <FiCheck className='' />
                                    </div>
                                    <p className='font-secondary ml-[22px]  text-[18px] font-medium  leading-[32px]  text-details  group-hover:text-white transition-all duration-500 '>Data export & deletion</p>
                                </div>


                                <div className=" flex mb-[26px]  ">
                                    <div className="flex justify-center  items-center w-[24px] h-[24px] rounded-full bg-[#E8F2FA]  group-hover:bg-white transition-all duration-500  ">
                                        <FiCheck className='' />
                                    </div>
                                    <p className='font-secondary ml-[22px]  text-[18px] font-medium  leading-[32px]  text-details  group-hover:text-white transition-all duration-500 '>Block native integrations</p>
                                </div>


                                <div className=" flex mb-[26px]  ">
                                    <div className="flex justify-center  items-center w-[24px] h-[24px] rounded-full bg-[#E8F2FA]  group-hover:bg-white transition-all duration-500  ">
                                        <FiCheck className='' />
                                    </div>
                                    <p className='font-secondary ml-[22px]  text-[18px] font-medium  leading-[32px]  text-details  group-hover:text-white transition-all duration-500 '>Custom branding</p>
                                </div>


                                <div className=" flex mb-[26px]  ">
                                    <div className="flex justify-center  items-center w-[24px] h-[24px] rounded-full bg-[#E8F2FA]  group-hover:bg-white transition-all duration-500  ">
                                        <FiCheck className='' />
                                    </div>


                                    <p className='font-secondary ml-[22px]  text-[18px] font-medium  leading-[32px]  text-details  group-hover:text-white transition-all duration-500 '>Lock custom fields</p>
                                </div>


                                <div className=" flex  ">
                                    <div className="flex justify-center  items-center w-[24px] h-[24px] rounded-full bg-[#E8F2FA]  group-hover:bg-white transition-all duration-500  ">
                                        <FiCheck className='' />
                                    </div>
                                    <p className='font-secondary ml-[22px]  text-[18px] font-medium  leading-[32px]  text-details  group-hover:text-white transition-all duration-500 '>Priority support</p>
                                </div>




                            </div>
                            <a className=' font-secondary cursor-pointer font-medium text-lg leading--[20px] py-5 px-[104px] text-white rounded-[6px] bg-secondary  group-hover:bg-[#43E7DF]  text-tittle   transition-all duration-500  '>Purchase Now</a>
                        </div>


                    </div></div>
            </Container>

        </div>
    )
}

export default Pricingtable
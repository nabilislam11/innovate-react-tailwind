import React from 'react'
import Container from '../layout/Container'
import user1 from '../../assets/user1.png'
import { FiCheck } from "react-icons/fi";

function Pricingtable() {
    return (
        <div className='pt-[122px] pb-[160px] '>
            <Container>
                <div className=" text-center   ">
                    <h1 className='font-paimary  m-auto  font-bold text-[46px] leading-[58px] text-tittle w-[624px] '>Pricing Designed To Fit Your Business</h1>
                    <p className='font-paimary  text-[24px] font-bold leading-[100%px] pt-[39px] pb-[77px] text-secondary ' >Monthly</p>
                </div>

                <div className="flex justify-between">
                    <div className="w-[450px] h-[698px] border  border-[#DCE7FE]  rounded-[20px] group hover:bg-secondary transition-all duration-500   ">
                        <div className=" pt-[40px] text-center">
                            <div className="flex justify-center m-auto  items-center w-[90px] h-[90px] rounded-full bg-[#E8F2FA] group-hover:bg-white transition-all duration-500 ">
                                <img src={user1} alt="" />
                            </div>

                            <div className="text-center  ">
                                <p className='font-paimary  text-[24px] font-bold  leading-[36px]  text-secondary mt-[32px] mb-[2px] group-hover:text-[#43E7DF] transition-all duration-500  '>Personal</p>
                                <h2 className='font-paimary    font-bold text-[44px] leading-[54px] text-tittle group-hover:text-white transition-all duration-500 '>$10/mth</h2>
                                <p className='font-secondary m-auto text-[18px] font-medium leading-[18px] mt-[14px] mb-[40px] text-[#645E76] w-[320px]  group-hover:text-white transition-all duration-500  '>Annual pricing <span className='text-secondary'>(save 20%)</span> </p>
                            </div>

                            <div className="my-[40px] px-[60px]  ">

                                <div className=" flex mb-[26px]  ">
                                    <div className="flex justify-center  items-center w-[24px] h-[24px] rounded-full bg-[#E8F2FA]  group-hover:bg-white transition-all duration-500  ">
                                        <FiCheck className='' />
                                    </div>
                                    <p className='font-secondary ml-[22px]  text-[18px] font-medium  leading-[32px]  text-details  group-hover:text-white transition-all duration-500 '>Calendar View</p>
                                </div>


                                <div className=" flex mb-[26px]  ">
                                    <div className="flex justify-center  items-center w-[24px] h-[24px] rounded-full bg-[#E8F2FA]  group-hover:bg-white transition-all duration-500  ">
                                        <FiCheck className='' />
                                    </div>
                                    <p className='font-secondary ml-[22px]  text-[18px] font-medium  leading-[32px]  text-details  group-hover:text-white transition-all duration-500 '>Calendar View</p>
                                </div>


                                <div className=" flex mb-[26px]  ">
                                    <div className="flex justify-center  items-center w-[24px] h-[24px] rounded-full bg-[#E8F2FA]  group-hover:bg-white transition-all duration-500  ">
                                        <FiCheck className='' />
                                    </div>
                                    <p className='font-secondary ml-[22px]  text-[18px] font-medium  leading-[32px]  text-details  group-hover:text-white transition-all duration-500 '>Calendar View</p>
                                </div>


                                <div className=" flex mb-[26px]  ">
                                    <div className="flex justify-center  items-center w-[24px] h-[24px] rounded-full bg-[#E8F2FA]  group-hover:bg-white transition-all duration-500  ">
                                        <FiCheck className='' />
                                    </div>


                                    <p className='font-secondary ml-[22px]  text-[18px] font-medium  leading-[32px]  text-details  group-hover:text-white transition-all duration-500 '>Calendar View</p>
                                </div>


                                <div className=" flex  ">
                                    <div className="flex justify-center  items-center w-[24px] h-[24px] rounded-full bg-[#E8F2FA]  group-hover:bg-white transition-all duration-500  ">
                                        <FiCheck className='' />
                                    </div>
                                    <p className='font-secondary ml-[22px]  text-[18px] font-medium  leading-[32px]  text-details  group-hover:text-white transition-all duration-500 '>Calendar View</p>
                                </div>




                            </div>
                            <a className=' font-secondary cursor-pointer font-medium text-lg leading--[20px] py-5 px-[104px] text-white rounded-[6px] bg-secondary  group-hover:bg-[#43E7DF]  text-tittle   transition-all duration-500  '>Purchase Now</a>
                        </div>


                    </div>
                    <div className="w-[450px] h-[698px] border  border-[#DCE7FE]  rounded-[20px] group hover:bg-secondary transition-all duration-500   ">
                        <div className=" pt-[40px] text-center">
                            <div className="flex justify-center m-auto  items-center w-[90px] h-[90px] rounded-full bg-[#E8F2FA] group-hover:bg-white transition-all duration-500 ">
                                <img src={user1} alt="" />
                            </div>

                            <div className="text-center  ">
                                <p className='font-paimary  text-[24px] font-bold  leading-[36px]  text-secondary mt-[32px] mb-[2px] group-hover:text-[#43E7DF] transition-all duration-500  '>Personal</p>
                                <h2 className='font-paimary    font-bold text-[44px] leading-[54px] text-tittle group-hover:text-white transition-all duration-500 '>$10/mth</h2>
                                <p className='font-secondary m-auto text-[18px] font-medium leading-[18px] mt-[14px] mb-[40px] text-[#645E76] w-[320px]  group-hover:text-white transition-all duration-500  '>Annual pricing <span className='text-secondary'>(save 20%)</span> </p>
                            </div>

                            <div className="my-[40px] px-[60px]  ">

                                <div className=" flex mb-[26px]  ">
                                    <div className="flex justify-center  items-center w-[24px] h-[24px] rounded-full bg-[#E8F2FA]  group-hover:bg-white transition-all duration-500  ">
                                        <FiCheck className='' />
                                    </div>
                                    <p className='font-secondary ml-[22px]  text-[18px] font-medium  leading-[32px]  text-details  group-hover:text-white transition-all duration-500 '>Calendar View</p>
                                </div>


                                <div className=" flex mb-[26px]  ">
                                    <div className="flex justify-center  items-center w-[24px] h-[24px] rounded-full bg-[#E8F2FA]  group-hover:bg-white transition-all duration-500  ">
                                        <FiCheck className='' />
                                    </div>
                                    <p className='font-secondary ml-[22px]  text-[18px] font-medium  leading-[32px]  text-details  group-hover:text-white transition-all duration-500 '>Calendar View</p>
                                </div>


                                <div className=" flex mb-[26px]  ">
                                    <div className="flex justify-center  items-center w-[24px] h-[24px] rounded-full bg-[#E8F2FA]  group-hover:bg-white transition-all duration-500  ">
                                        <FiCheck className='' />
                                    </div>
                                    <p className='font-secondary ml-[22px]  text-[18px] font-medium  leading-[32px]  text-details  group-hover:text-white transition-all duration-500 '>Calendar View</p>
                                </div>


                                <div className=" flex mb-[26px]  ">
                                    <div className="flex justify-center  items-center w-[24px] h-[24px] rounded-full bg-[#E8F2FA]  group-hover:bg-white transition-all duration-500  ">
                                        <FiCheck className='' />
                                    </div>


                                    <p className='font-secondary ml-[22px]  text-[18px] font-medium  leading-[32px]  text-details  group-hover:text-white transition-all duration-500 '>Calendar View</p>
                                </div>


                                <div className=" flex  ">
                                    <div className="flex justify-center  items-center w-[24px] h-[24px] rounded-full bg-[#E8F2FA]  group-hover:bg-white transition-all duration-500  ">
                                        <FiCheck className='' />
                                    </div>
                                    <p className='font-secondary ml-[22px]  text-[18px] font-medium  leading-[32px]  text-details  group-hover:text-white transition-all duration-500 '>Calendar View</p>
                                </div>




                            </div>
                            <a className=' font-secondary cursor-pointer font-medium text-lg leading--[20px] py-5 px-[104px] text-white rounded-[6px] bg-secondary  group-hover:bg-[#43E7DF]  text-tittle   transition-all duration-500  '>Purchase Now</a>
                        </div>


                    </div>
                    <div className="w-[450px] h-[698px] border  border-[#DCE7FE]  rounded-[20px] group hover:bg-secondary transition-all duration-500   ">
                        <div className=" pt-[40px] text-center">
                            <div className="flex justify-center m-auto  items-center w-[90px] h-[90px] rounded-full bg-[#E8F2FA] group-hover:bg-white transition-all duration-500 ">
                                <img src={user1} alt="" />
                            </div>

                            <div className="text-center  ">
                                <p className='font-paimary  text-[24px] font-bold  leading-[36px]  text-secondary mt-[32px] mb-[2px] group-hover:text-[#43E7DF] transition-all duration-500  '>Personal</p>
                                <h2 className='font-paimary    font-bold text-[44px] leading-[54px] text-tittle group-hover:text-white transition-all duration-500 '>$10/mth</h2>
                                <p className='font-secondary m-auto text-[18px] font-medium leading-[18px] mt-[14px] mb-[40px] text-[#645E76] w-[320px]  group-hover:text-white transition-all duration-500  '>Annual pricing <span className='text-secondary'>(save 20%)</span> </p>
                            </div>

                            <div className="my-[40px] px-[60px]  ">

                                <div className=" flex mb-[26px]  ">
                                    <div className="flex justify-center  items-center w-[24px] h-[24px] rounded-full bg-[#E8F2FA]  group-hover:bg-white transition-all duration-500  ">
                                        <FiCheck className='' />
                                    </div>
                                    <p className='font-secondary ml-[22px]  text-[18px] font-medium  leading-[32px]  text-details  group-hover:text-white transition-all duration-500 '>Calendar View</p>
                                </div>


                                <div className=" flex mb-[26px]  ">
                                    <div className="flex justify-center  items-center w-[24px] h-[24px] rounded-full bg-[#E8F2FA]  group-hover:bg-white transition-all duration-500  ">
                                        <FiCheck className='' />
                                    </div>
                                    <p className='font-secondary ml-[22px]  text-[18px] font-medium  leading-[32px]  text-details  group-hover:text-white transition-all duration-500 '>Calendar View</p>
                                </div>


                                <div className=" flex mb-[26px]  ">
                                    <div className="flex justify-center  items-center w-[24px] h-[24px] rounded-full bg-[#E8F2FA]  group-hover:bg-white transition-all duration-500  ">
                                        <FiCheck className='' />
                                    </div>
                                    <p className='font-secondary ml-[22px]  text-[18px] font-medium  leading-[32px]  text-details  group-hover:text-white transition-all duration-500 '>Calendar View</p>
                                </div>


                                <div className=" flex mb-[26px]  ">
                                    <div className="flex justify-center  items-center w-[24px] h-[24px] rounded-full bg-[#E8F2FA]  group-hover:bg-white transition-all duration-500  ">
                                        <FiCheck className='' />
                                    </div>


                                    <p className='font-secondary ml-[22px]  text-[18px] font-medium  leading-[32px]  text-details  group-hover:text-white transition-all duration-500 '>Calendar View</p>
                                </div>


                                <div className=" flex  ">
                                    <div className="flex justify-center  items-center w-[24px] h-[24px] rounded-full bg-[#E8F2FA]  group-hover:bg-white transition-all duration-500  ">
                                        <FiCheck className='' />
                                    </div>
                                    <p className='font-secondary ml-[22px]  text-[18px] font-medium  leading-[32px]  text-details  group-hover:text-white transition-all duration-500 '>Calendar View</p>
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
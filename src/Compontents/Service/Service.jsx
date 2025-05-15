import React from 'react'
import service1 from '../../assets/service1.png'
import service2 from '../../assets/service2.png'
import service3 from '../../assets/service3.png'
import service4 from '../../assets/service4.png'
import Container from '../layout/Container'
import { FaArrowRightLong } from "react-icons/fa6";

function Service() {
  return (
    <Container>
      <div className='text-center py-[140px] '>
        <p className='font-secondary font-medium text-[20px] text-highlith ' >Our Services</p>
        <h1 className='font-paimary font-bold text-[46px] leading-[58px]  text-tittle '>How It Works</h1>
      </div>


      <div className="flex justify-between items-center ">



        <div className="py-[36px] px-[36px] bg-white gap-[30px] boder-[10px] shadow-md ">
          <img src={service1} alt="#service" />
          <h3 className='w-[258px] font-paimary font-bold text-[22px] leading-[34px] text-tittle pt-[26px] pb-{8px}'>Plan Product Roadmap</h3>
          <p className='w-[258px] font-secondary text-details font-reguler text-{16px}  leading-[26px] pb-{26px} '>A product roadmap is a shared source of truth that outlines the vision, direction, priorities</p>

          <div className="flex items-center  gap-[4px] "> <a className=' font-secondary text-secondary font-medium text-{16px}  leading-[26px]' href="">Read More
          </a>
            <a href=""><FaArrowRightLong /></a>
          </div>
        </div>


        <div className="py-[36px] px-[36px] bg-white gap-[30px] shadow-md ">
          <img src={service2} alt="#service" />
          <h3 className='w-[258px] font-paimary font-bold text-[22px] leading-[34px] text-tittle pt-[26px] pb-{8px}'>Assign Any Work</h3>
          <p className='w-[258px] font-secondary text-details font-reguler text-{16px}  leading-[26px] pb-{26px} '>Work assignment or job assignment is allocating work to work centers or appropriate </p>

          <div className="flex items-center  gap-[4px] "> <a className=' font-secondary text-secondary font-medium text-{16px}  leading-[26px]' href="">Read More
          </a>
            <a href=""><FaArrowRightLong /></a>
          </div>
        </div>



        <div className="py-[36px] px-[36px] bg-white gap-[30px] shadow-md ">
          <img src={service3} alt="#service" />
          <h3 className='w-[258px] font-paimary font-bold text-[22px] leading-[34px] text-tittle pt-[26px] pb-{8px}'>Monitor Work Progress</h3>
          <p className='w-[258px] font-secondary text-details font-reguler text-{16px}  leading-[26px] pb-{26px} '>Monitor Work ProgressKeeping records and monitoring activities helps people see progress </p>

          <div className="flex items-center  gap-[4px] "> <a className=' font-secondary text-secondary font-medium text-{16px}  leading-[26px]' href="">Read More
          </a>
            <a href=""><FaArrowRightLong /></a>
          </div>
        </div>


        <div className="py-[36px] px-[36px] bg-white gap-[30px] shadow-md ">
          <img src={service4} alt="#service" />
          <h3 className='w-[258px] font-paimary font-bold text-[22px] leading-[34px] text-tittle pt-[26px] pb-{8px}'>Pertect Intergration</h3>
          <p className='w-[258px] font-secondary text-details font-reguler text-{16px}  leading-[26px] pb-{26px} '>App integration, in a general sense, is the process of resources or capabilities from one application </p>

          <div className="flex items-center  gap-[4px] "> <a className=' font-secondary text-secondary font-medium text-{16px}  leading-[26px]' href="">Read More
          </a>
            <a href=""><FaArrowRightLong /></a>
          </div>
        </div>


      </div>
      <div className=" pt-[80px] text-center">
       <button>sjdflksdjfsjk</button>
      </div>


    </Container>
  )
}

export default Service
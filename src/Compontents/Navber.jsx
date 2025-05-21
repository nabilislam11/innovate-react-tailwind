import React, { useState } from 'react'
import Container from './layout/Container'
import logo from '../assets/logo.png'
import { FaBars } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

const Navber = () => {
  const [show, setshow] = useState(false);

  const handleclick = () => {
    setshow(!show)
  }

  return (
    <>
      <div className=" relative py-8 ">
        <Container>
          <nav className='  '>
            <div className="  md: flex justify-between items-center">
              <div className="lg:w-[111px] w-full  flex items-center justify-between ">
                <img src={logo} alt="#logo" />
                <div className=" block  md:hidden   "> <FaBars onClick={handleclick} className='text-white text-2xl ' /> </div>
              </div>


              <div className="  ">
                <ul className=' hidden md:flex gap-[50px] font-secondary  font-medium text-lg  text-white '>
                <li> <a className=' group hover:text-red-500 transition-all duration-500' href="">home</a></li>
                <li><a className='group hover:text-red-500 transition-all duration-500 ' href="">Features</a> </li>
                <li><a className='group hover:text-red-500 transition-all duration-500 ' href="">Service</a></li>
                <li><a className='group hover:text-red-500 transition-all duration-500 ' href="">Pages</a></li>
                <li> <a className='group hover:text-red-500 transition-all duration-500 ' href="">Blog</a></li>
              </ul>
              </div>


              <div className=" hidden md:flex gap-[36px]  items-center">
                <p className='font-secondary font-medium text-lg  cursor-pointer text-white group hover:text-red-500 transition-all duration-500 '>Login</p>
                <a className=' font-secondary cursor-pointer font-medium text-lg py-5 px-12 bg-paimary rounded-[6px] text-secondary'>Register</a>
              </div>
            </div>
          </nav>

        </Container>
                  {
            show && (

              <div className=" bg-gray-600  h-[350px]  absolute top-0 left-0 z-[999] w-full flex justify-center items-center">
                <div className=""><MdOutlineCancel onClick={()=>setshow(false) } className='text-white text-4xl absolute top-[39px] right-[10px] ' /></div>
                <nav className='  '>
                  <div className=" flex-col  md: flex justify-between items-center">
              


                    <div className=" "><ul className='md:flex  font-secondary  font-medium text-lg text-center text-white '>
                      <li> <a className=' group hover:text-red-500 transition-all duration-500 ' href="">home</a></li>
                      <li><a className='group hover:text-red-500 transition-all duration-500 ' href="">Features</a> </li>
                      <li><a className='group hover:text-red-500 transition-all duration-500 ' href="">Service</a></li>
                      <li><a className='group hover:text-red-500 transition-all duration-500 ' href="">Pages</a></li>
                      <li> <a className='group hover:text-red-500 transition-all duration-500 ' href="">Blog</a></li>
                    </ul>
                    </div>


                    <div className="     text-center items-center md:">
                      <p className='font-secondary font-medium text-lg  cursor-pointer mb-[25px] mt-2.5 text-white group hover:text-red-500 transition-all duration-500 '>Login</p>
                      <a className=' font-secondary cursor-pointer font-medium text-lg py-5 px-12 bg-paimary rounded-[6px] text-secondary'>Register</a>
                    </div>
                  </div>
                </nav>
              </div>
            )
          }
      </div>
    </>
  )
}

export default Navber

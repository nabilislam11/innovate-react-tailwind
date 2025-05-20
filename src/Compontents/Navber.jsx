import React from 'react'
import Container from './layout/Container'
import logo from '../assets/logo.png'

const Navber = () => {
  return (
    <>
    <div className=" py-8 ">
          <Container>
          <nav className='  '>
      <div className=" flex justify-between items-center">
       <div className="">
        <img src={logo} alt="#logo" />
       </div>


      <div className="  "><ul className='flex gap-[50px] font-secondary  font-medium text-lg  text-white '>
        <li> <a  className=' group hover:text-red-500 transition-all duration-500' href="">home</a></li>
        <li><a  className='group hover:text-red-500 transition-all duration-500 'href="">Features</a> </li>
        <li><a  className='group hover:text-red-500 transition-all duration-500 'href="">Service</a></li>
        <li><a className='group hover:text-red-500 transition-all duration-500 ' href="">Pages</a></li>
        <li> <a className='group hover:text-red-500 transition-all duration-500 ' href="">Blog</a></li>
      </ul>
      </div>


      <div className=" flex gap-[36px]  items-center">
        <p className='font-secondary font-medium text-lg  cursor-pointer text-white group hover:text-red-500 transition-all duration-500 '>Login</p>
        <a className=' font-secondary cursor-pointer font-medium text-lg py-5 px-12 bg-paimary rounded-[6px] text-secondary'>Register</a>
     </div>
      </div>
    </nav>
    </Container>
    </div>
    </>
  )
}

export default Navber

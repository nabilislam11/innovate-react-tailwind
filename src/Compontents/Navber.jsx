import React from 'react'
import Container from './layout/Container'
import logo from '../assets/logo.png'

const Navber = () => {
  return (
    <>
    <div className=" py-8 ">
          <Container>
          <nav className='  '>
      <div className=" flex justify-between items-center pt-[32px]">
       <div className="">
        <img src={logo} alt="#logo" />
       </div>


      <div className="  "><ul className='flex gap-[50px] font-secondary  font-medium text-lg  text-white'>
        <li> <a href="">home</a></li>
        <li><a href="">Features</a> </li>
        <li><a href="">Service</a></li>
        <li><a href="">Pages</a></li>
        <li> <a href="">Blog</a></li>
      </ul>
      </div>


      <div className=" flex gap-[36px]  items-center">
        <p className='font-secondary font-medium text-lg  text-white'>Login</p>
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

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


      <div className="  "><ul className='flex gap-[50px] font-secondary font-medium text-lg  text-white'>
        <li>home</li>
        <li>Features</li>
        <li>Service</li>
        <li>Pages</li>
        <li>Blog</li>
      </ul>
      </div>


      <div className=" flex gap-[36px]  items-center">
        <p className='font-secondary font-medium text-lg  text-white'>Login</p>
        <a className=' font-secondary font-medium text-lg py-5 px-12 bg-paimary rounded-[6px] text-secondary'>Register</a>
     </div>
      </div>
    </nav>
    </Container>
    </div>
    </>
  )
}

export default Navber

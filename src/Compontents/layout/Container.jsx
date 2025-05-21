import React from 'react'

function Container({children}) {
  return (
    <div className='w-full  md:w-[1409px] m-auto  px-4 md:px-0 '>
        {children}
    </div>
  )
}

export default Container
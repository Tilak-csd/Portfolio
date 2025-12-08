import React from 'react'

export default function SideSocailmedia() {
  return (
    <div className='flex flex-col justify-center items-center bg-gray-300 py-2 px-1 absolute top-[50%] left-0'>
        <a href="#"><img src="./instagram.svg" alt="" className='w-5 h-5'/></a>
        <a href="#"><img src="./github.svg" alt="" className='w-5 h-5'/></a>
        <a href="#"><img src="./linkedin.svg" alt=""className='w-5 h-5' /></a>
        <a href="#"><img src="./facebook.svg" alt="" className='w-5 h-5'/></a>
    </div>
  )
}

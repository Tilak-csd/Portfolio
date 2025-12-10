import React from 'react'

export default function Hero() {
  return (
    <div className='bg-gray-200 h-[calc(100vh-60px)] w-full grid grid-cols-4 sm:grid-cols-6 grid-rows-4'>

      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
    </div>
  )
}

function FirstComponent() {
  return (
    <div className="flex flex-col items-center row-span-4 justify-center h-full">

      {/* Vertical Text */}
      <span className="writing-mode-vertical text-gray-600 text-sm tracking-wide">
        Full-Stack Developer
      </span>

      {/* Line */}
      <div className="w-[2px] h-[60%] bg-gray-300 my-2"></div>

      {/* Bottom Year */}
      <span className="text-gray-500 text-xs writing-mode-vertical">2024</span>
    </div>
  );
}

function SecondComponent() {
  return <div className="sm:col-span-2 col-span-3 row-span-3 flex justify-around flex-col items-start ">
    <div className='w-full justify-start gap-4 sm:gap-10 flex'>
      <div className='flex flex-col items-start'>
        <div className='text-2xl sm:text-3xl font-light text-gray-600 flex justify-start'>+<span className='text-6xl'>10</span></div>
        <div className='text-gray-400 text-sm sm:text-md ml-4 sm:ml-8'>Projects Completed</div>
      </div>
      <div>
        <div className='text-3xl font-light text-gray-600 flex justify-start'>+<span className='text-6xl'>5</span></div>
        <div className='text-gray-400 text-sm sm:text-md ml-5'>Collaboration</div>
      </div>
    </div>
    <div className='flex flex-col justify-center items-start'>
      <h1 className='text-8xl sm:text-9xl font-light'>Hello</h1>
      <div className='flex justify-center items-start md:items-start'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
          <path fill-rule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
        </svg>
        <p>It's Tilak Man Gubhaju a Web Developer.</p>
      </div>
    </div>
  </div>

}

function ThirdComponent() {
  return <div className="col-span-2 col-start-2 row-start-4 flex items-center" >
    <div className='cursor-pointer border flex justify-center text-gray-600 animate-bounce items-center px-3 py-1 bg-white rounded-full'>
      Scroll Down
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="size-5 h-4 ">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
      </svg>
    </div>
  </div>

}

function FourthComponent() {
  return <div className="sm:block hidden col-span-3 row-span-4 col-start-4 row-start-1 bg-blue-300">5</div>

}
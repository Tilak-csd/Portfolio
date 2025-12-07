import React, { useEffect, useState } from 'react'
import Buttons from '../utilities/Buttons'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (open) {
      document.body.style.height = '100vh'
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }

    return () => {
      document.body.style.overflowY = 'auto'

    }
  }, [open])

  return (
    <div className='relative flex justify-between items-center h-15 w-full px-4 border-b border-gray-200'>
      <p className='font-rosca text-xl'>Tilak Gubhaju</p>
      {open && <NavLink />}
      {open ? <CloseMenu setOpen={setOpen} /> : <OpenMenu setOpen={setOpen} />}
    </div>
  )
}

function NavLink() {
  return <div className='absolute flex flex-col justify-center items-center top-15 left-0 bg-white w-full h-[calc(100vh-60px)] z-1 overflow-hidden gap-5 '>
    <ul className='flex flex-col justify-center items-center gap-5 font-sans text-md'>
      <li className='hover:underline'><a href="/hello">Home</a></li>
      <li><a href="">About</a></li>
      <li><a href="">Projects</a></li>
      <li><a href="#my">Testomonital</a></li>
    </ul>
    <Buttons label={'Contact'} />
  </div>
}

function OpenMenu({ setOpen }) {
  return <div className='p-2 cursor-pointer' onClick={() => setOpen(prev => !prev)}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
      <path fill-rule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm7 10.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Z" clip-rule="evenodd" />
    </svg>

  </div>
}

function CloseMenu({ setOpen }) {
  return <div className='p-2 cursor-pointer' onClick={() => setOpen(prev => !prev)}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>

  </div>
}
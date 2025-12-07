import React, { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <div className='relative flex justify-between items-center h-15 bg-amber-50 w-full px-4'>
      <p className='font-rosca text-xl'>Tilak Gubhaju</p>
      {open ? <NavLink /> : <ToggleMenu setOpen={setOpen}  />}
    </div>
  )
}

function NavLink() {
  return <ul className='flex flex-col justify-center items-center'>
    <li><a href="/hello">Home</a></li>
    <li><a href="">About</a></li>
    <li><a href="">Projects</a></li>
    <li><a href="#my">Testomonital</a></li>
  </ul>
}

function ToggleMenu({setOpen}) {
  return <div className='p-2 cursor-pointer' onClick={()=> setOpen(prev => !prev)}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
      <path fill-rule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm7 10.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Z" clip-rule="evenodd" />
    </svg>

  </div>
}
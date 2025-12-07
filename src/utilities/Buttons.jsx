import React from 'react'

export default function Buttons({label}) {
    return (
        <button className='px-5 py-2 font-sans rounded-2xl hover:text-gray-300 hover: bg-black w-auto cursor-pointer text-md text-white'>{label}</button>
    )
}

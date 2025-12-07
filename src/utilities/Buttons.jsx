import React from 'react'

export default function Buttons({label}) {
    return (
        <button className='p-2 font-sans rounded-2xl hover:text-gray-300 hover: bg-black w-50 cursor-pointer text-md text-white'>{label}</button>
    )
}

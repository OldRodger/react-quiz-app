import React from 'react'
import ReactImage from "../assets/react.svg";

function Header() {
    return (
        <div className='flex items-center justify-center py-8 gap-10 mb-5'>
            <img src={ReactImage} alt="header-photo" className='w-32 animate-spin-slow duration-[20s]' />
            <h1 className='text-white text-6xl font-header font-bold'>The React Quiz</h1>
        </div>
    )
}

export default Header
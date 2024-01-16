import React from 'react'

function StartScreen({questionCount, onClick}) {
    return (
        <div className='text-white flex flex-col items-center gap-4'>
           <h2 className='text-4xl font-bold'>Welcome to The React Quiz!</h2>
           <h3 className='text-xl font-bold'>{questionCount} questions to test your React mastery</h3>
           <button type='button' className='mt-8 bg-dark px-6 py-2 rounded-3xl' onClick={onClick}>Let's start</button>
        </div>
    )
}

export default StartScreen
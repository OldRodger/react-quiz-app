import React from 'react'

function Footer({ children }) {
    return (
        <footer className='flex items-center justify-between mt-8'>{children}</footer>
    )
}

export default Footer
import React from 'react'

function Navbar() {
  return (
    <>
    <nav className='bg-cyan-950 flex justify-between text-white ' >
        <div className='logo'>
            <span className='font-bold text-xl mx-8 '>iTask</span>
        </div>
        <ul className='flex gap-8 mx-8'>
            <li className='hover:font-semibold transition-all duration-75'>Home</li>
            <li className='hover:font-semibold transition-all duration-75'>Your Tasks</li>
        </ul>
    </nav>    

    </>
  )
}

export default Navbar
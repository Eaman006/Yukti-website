import React from 'react'

const Navbar = () => {
  return (
    <div className='m-2 p-2 flex gap-10'>
      <div className='mx-auto'>Yukti</div>
      <ul className='flex gap-5'>
        <li className='hover:text-red-600 cursor-pointer'>Home</li>
        <li className='hover:text-red-600 cursor-pointer'>About Us</li>
        <li className='hover:text-red-600 cursor-pointer'>Contact Us</li>
      </ul>
    </div>
  )
}

export default Navbar

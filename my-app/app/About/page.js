import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='pt-20 bg-[#d2d8fb] h-screen w-full'>
      <div className='w-full mx-auto text-center font-bold text-5xl mt-8 h-32'>
        About Us
      </div>
      <div className='flex m-2 p-2 font-bold text-xl'>
        <div>
          We are a virtual reality (VR) application designed for children with autism aged 7-15.
        We focus on motor skill development, social interactions, and cognitive enhancement of neurodiverse children.
        </div>
        <div className='w-full'>
        </div>
      </div>
    </div>
  )
}

export default page

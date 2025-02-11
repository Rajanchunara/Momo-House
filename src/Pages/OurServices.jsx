import React from 'react'
import services1 from '../assets/Services/services1.png'
import services2 from '../assets/Services/services2.png'
import { FaPlayCircle } from "react-icons/fa";


function OurServices() {
  return (
    <div>
      <div className='bg-white h-[600px] ml-[110px] mt-[20px] flex justify-between'>
        <div className='mt-[100px]'>
          <h1 className='text-teal-700 text-[50px] font-parisienne mb-[30px]'>Our Services</h1>
          <h2 className='text-gray-500 tracking-[2px]'>KNOWING OUR CUSTOMERS NEEDS </h2>
          <p className='flex flex-col text-orange-600 font-bold text-[25px] mt-[10px]'>We're more than just momos.
            <span className='text-black'> We're a full-service dining experience. </span></p>
        </div>
        <div className='mr-[100px]'>
          <img src={services1} alt="" className='h-[500px]' />
        </div>
      </div>
         
          <div className='h-[650px]'>
                 <img src={services2} alt="" className='h-[640px] absolute -z-50 brightness-35 blur-[1px]' />
                 <div className='ml-[110px] text-white pt-[350px]'>
                   <h1 className='text-[40px] font-bold'>Dine With Us</h1>
                   <p>Enjoy our momos in the comfort of your own home with our delivery services</p>
                   <button className='flex justify-center items-center gap-4 w-[231px] h-[64px] bg-teal-600 rounded-[100px] text-[16px] mt-[50px] hover:bg-teal-800'>
                     <FaPlayCircle className='h-[32px] w-[32px]' /> Watch the Video</button>
                 </div>
               </div>


    </div>
  )
}

export default OurServices
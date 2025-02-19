import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import momo from '../assets/Image/momo.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { CartContext } from '../Context/CartContext/CartProvider';

function Navigation() {


  const { state } = useContext(CartContext)
  console.log(state.cartItem);
  const totalCartItem = state.cartItem.reduce((acc, item) => {
    return acc + item.qty;
  }, 0)
  console.log(totalCartItem);


  return (
    <div>
      <div className='h-[90px] shadow-2xs shadow-gray-300  pl-[110px] flex items-center justify-center bg-white'>
        <div>
          <img src={momo} alt="" className='h-[45px]' />
        </div>
        <div className='pl-[20px] space-x-[30px] flex'>
          <NavLink to='/' className='hover:text-orange-500 text-gray-500'>Home</NavLink>
          <NavLink to='/aboutus' className='hover:text-orange-500 text-gray-500'>About Us</NavLink>
          <NavLink to='/ourmenu' className='hover:text-orange-500 text-gray-500' >Our Menu</NavLink>
          <NavLink to='/ourservices' className='hover:text-orange-500 text-gray-500'>Our Services</NavLink>
          <NavLink to='/allergyadvice' className='hover:text-orange-500 text-gray-500'>Allergy Advice</NavLink>
          <NavLink to='/cartpage' className=' text-gray-500'>

            <span className='absolute ml-[25px] top-[18px] z-50 text-white border w-[25px] flex justify-center bg-red-500 rounded-[50px]'>{totalCartItem}</span>
            <BsCart4 className='w-[50px] h-[35px] hover:text-orange-600 ' /></NavLink>


        </div>
        <div className='flex  ml-[100px] space-x-[20px]'>
          <div className='flex space-x-[20px] mt-[8px]'>
            <NavLink to="https://www.facebook.com/login.php/" target='_blank'>
              <FaFacebook className='text-gray-600 h-[30px] w-[30px] hover:text-blue-500' />
            </NavLink>

            <NavLink to="https://www.instagram.com/accounts/login" target='_blank'>
              <FaInstagramSquare className='text-gray-600 h-[30px] w-[30px] hover:text-pink-500' />
            </NavLink>

            <NavLink to="https://www.tiktok.com/login" target='_blank'>
              <AiFillTikTok className='text-gray-600 h-[30px] w-[30px] hover:text-black' />
            </NavLink>

          </div>
          <NavLink to='/contactus'>
            <button className='border h-[40px] w-[120px] rounded-[50px] bg-orange-500 hover:bg-orange-800 text-white'>Contact Us</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navigation
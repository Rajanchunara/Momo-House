import React from 'react'
import { HiMiniArrowLongRight } from "react-icons/hi2";
import home1 from '../assets/Home/home1.png'
import home2 from '../assets/Home/home2.png'
import men from '../assets/Home/men.png'
import { NavLink } from 'react-router-dom';


function Home() {
  return (
    <div>
      <div className='h-[650px]'>
        <div className='ml-[110px] mt-[100px] space-y-2'>
          <h1 className='text-gray-500 space-x-2 tracking-[2px]'>RESTAURANT</h1>
          <p className='font-bold text-[50px]'>The <span className='bg-[url(assets/Home/home3.png)] bg-center bg-cover text-white'>#One</span></p>
          <p className='font-bold text-[50px]'>Momo <span className='text-orange-600'>Restaurant</span></p>
          <h1 className='font-bold text-[20px]'>More then <span className='text-orange-600'>20+ Varieties</span> of momo available for you</h1>
          <NavLink to="/ourmenu">
            <button className='flex justify-center items-center border h-[55px] w-[220px] rounded-[50px] bg-teal-900 text-white hover:bg-teal-950 mt-[40px]' >
              Explore Food Menu
              <HiMiniArrowLongRight className='mt-[5px] ml-[5px] text-2xl' />
            </button>
          </NavLink>
        </div>
        <div className='flex'>
          <div>
            <img src={home2} alt="" className='h-[700px] absolute right-0 top-0 -z-50' />
          </div>
          <div>
            <img src={home1} alt="" className='h-[400px] absolute right-[30px] top-[150px]' />
          </div>
        </div>
      </div>
      <div className='ml-[110px] h-[500px] flex justify-between'>
        <div className=' w-[360px] h-[415px] bg-teal-900 flex justify-center rounded-t-[300px]'>
          <img src={men} alt="" className='h-[500px] absolute top-[754px]' />
        </div>
        <div className='w-[500px] mr-[100px]'>
          <h1 className='font-bold text-[35px]'>Why Customer <span className='text-orange-600'>Love Us</span></h1>
          <p className='mt-[20px] text-gray-500'>We bring you the perfect blend of authentic flavors,
            fresh ingredients, and warm hospitality.
            Our handcrafted momos, rich with traditional spices and fillings,
            keep customers coming back for more. Whether you crave classic steamed momos,
            crispy fried delights, or flavorful dumpling soups, we serve every dish with care and passion.
            With a cozy ambiance, friendly service, and a menu full of mouthwatering options,
            we create a dining experience that feels like home. Come taste the love in every bite!</p>
          <NavLink to="/ourservices">
            <button className='flex justify-center items-center border h-[55px] w-[220px] rounded-[50px] bg-teal-900 text-white hover:bg-teal-950 mt-[40px]' >Explore Our Story <HiMiniArrowLongRight className='mt-[5px] ml-[5px] text-2xl' /></button>
          </NavLink>
        </div>
      </div>

      <div className='ml-[110px] mt-[50px] h-[400px]'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-[39px] font-bold'>Our <span className='text-orange-500'> Most Popular</span> Recipes</h1>
          <p className='text-[20px]'>Browse through a varieties of recipes with fresh ingredients selected only from the best places</p>
        </div>
        <div className='flex justify-center items-center mt-[40px] gap-[40px]'>
          <button className='border border-gray-500 w-[125px] h-[50px] rounded-[50px]'>Buff</button>
          <button className='border border-gray-500 w-[125px] h-[50px] rounded-[50px]'>Chiken</button>
          <button className='border border-gray-500 w-[125px] h-[50px] rounded-[50px]'>Veg</button>
        </div>
      </div>


    </div >

  )
}

export default Home
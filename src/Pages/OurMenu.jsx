import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

function OurMenu() {

  const [product, setProduct] = useState([]);

  const getData = async () => {
    let response = await fetch("https://dummyjson.com/recipes")
    response = await response.json();
    console.log(response.recipes);
    setProduct(response.recipes)
  };
  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      {product.length > 0 ? (
        <div className='flex p-[30px] flex-wrap gap-8 justify-center'>
          {product.map((item) => {
            return (
              <NavLink
                key={item.name}
                to={`/ProductDescription/${item.id}`}>
                <div key={item.name} className='h-48 w-52 flex flex-col justify-center items-center shadow-2xl shadow-gray-700 rounded-[20px] gap-2 hover:bg-gray-100' >
                  <img src={item.image} alt="" className='h-[100px] rounded-2xl ' />
                  <h1>{item.name}</h1>
                  <h1>Rs: {item.caloriesPerServing}</h1>
                </div>
              </NavLink>
            )

          })}

        </div>) : (<div>Loading...</div>)}
    </div>
  )
}

export default OurMenu
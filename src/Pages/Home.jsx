import React from "react";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import home1 from "../assets/Home/home1.png";
import home2 from "../assets/Home/home2.png";
import men from "../assets/Home/men.png";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function Home() {
  const [product, setProduct] = useState([]);
  const [filterItem, setFilterItem] = useState([]);
  const getData = async () => {
    let response = await fetch("https://dummyjson.com/recipes");
    response = await response.json();
    console.log(response.recipes);
    setProduct(response.recipes);

    filterProduct("American");
  };

  const filterProduct = (country) => {
    const products = product.filter((item) => {
      return item.cuisine === country;
    });
    setFilterItem(products);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="h-[650px]">
        <div className="ml-[110px] mt-[100px] space-y-2">
          <h1 className="text-gray-500 space-x-2 tracking-[2px]">RESTAURANT</h1>
          <p className="font-bold text-[50px]">
            The{" "}
            <span className="bg-[url(assets/Home/home3.png)] bg-center bg-cover text-white">
              #One
            </span>
          </p>
          <p className="font-bold text-[50px]">
            Momo <span className="text-orange-600">Restaurant</span>
          </p>
          <h1 className="font-bold text-[20px]">
            More then <span className="text-orange-600">20+ Varieties</span> of
            momo available for you
          </h1>
          <NavLink to="/ourmenu">
            <button className="flex justify-center items-center border h-[55px] w-[220px] rounded-[50px] bg-teal-900 text-white hover:bg-teal-950 mt-[40px]">
              Explore Food Menu
              <HiMiniArrowLongRight className="mt-[5px] ml-[5px] text-2xl" />
            </button>
          </NavLink>
        </div>
        <div className="flex">
          <div>
            <img
              src={home2}
              alt=""
              className="h-[700px] absolute right-0 top-0 -z-50"
            />
          </div>
          <div>
            <img
              src={home1}
              alt=""
              className="h-[400px] absolute right-[30px] top-[150px]"
            />
          </div>
        </div>
      </div>
      <div className="ml-[110px] h-[500px] flex justify-between">
        <div className=" w-[360px] h-[415px] bg-teal-900 flex justify-center rounded-t-[300px]">
          <img src={men} alt="" className="h-[500px] absolute top-[754px]" />
        </div>
        <div className="w-[500px] mr-[100px]">
          <h1 className="font-bold text-[35px]">
            Why Customer <span className="text-orange-600">Love Us</span>
          </h1>
          <p className="mt-[20px] text-gray-500">
            We bring you the perfect blend of authentic flavors, fresh
            ingredients, and warm hospitality. Our handcrafted momos, rich with
            traditional spices and fillings, keep customers coming back for
            more. Whether you crave classic steamed momos, crispy fried
            delights, or flavorful dumpling soups, we serve every dish with care
            and passion. With a cozy ambiance, friendly service, and a menu full
            of mouthwatering options, we create a dining experience that feels
            like home. Come taste the love in every bite!
          </p>
          <NavLink to="/ourservices">
            <button className="flex justify-center items-center border h-[55px] w-[220px] rounded-[50px] bg-teal-900 text-white hover:bg-teal-950 mt-[40px]">
              Explore Our Story{" "}
              <HiMiniArrowLongRight className="mt-[5px] ml-[5px] text-2xl" />
            </button>
          </NavLink>
        </div>
      </div>

      <div className="ml-[110px] mt-[50px] h-[400px]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[39px] font-bold">
            Our <span className="text-orange-500"> Most Popular</span> Recipes
          </h1>
          <p className="text-[20px]">
            Browse through a varieties of recipes with fresh ingredients
            selected only from the best places
          </p>
        </div>
        <div className="border-2 border-gray-600  mt-[40px] mr-[100px] rounded-2xl">
          <div className="flex justify-center items-center mt-[40px] gap-[40px]">
            <button
              onClick={() => {
                filterProduct("American");
              }}
              className="border border-gray-500 w-[125px] h-[50px] rounded-[50px] hover:bg-orange-500 hover:text-white"
            >
              American
            </button>
            <button
              onClick={() => {
                filterProduct("Italian");
              }}
              className="border border-gray-500 w-[125px] h-[50px] rounded-[50px]  hover:bg-orange-500 hover:text-white"
            >
              Italian
            </button>
            <button
              onClick={() => {
                filterProduct("Asian");
              }}
              className="border border-gray-500 w-[125px] h-[50px] rounded-[50px]  hover:bg-orange-500 hover:text-white"
            >
              Asian
            </button>
            <button
              onClick={() => {
                filterProduct("Mexican");
              }}
              className="border border-gray-500 w-[125px] h-[50px] rounded-[50px]  hover:bg-orange-500 hover:text-white"
            >
              Mexican
            </button>
          </div>
          <div>
            {filterItem.length > 0 ? (
              <div className="flex gap-5  justify-center  flex-wrap">
                {filterItem.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="shadow-2xl  m-5 w-72 py-3  shadow-gray-700 rounded-2xl   flex  flex-col  justify-center  items-center   p-2 gap-y-3"
                    >
                      <img
                        className="h-32  rounded-2xl"
                        src={item.image}
                        alt=""
                      />
                      <h1>Cuisine type: {item.cuisine}</h1>
                      <h1>Name: {item.name}</h1>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

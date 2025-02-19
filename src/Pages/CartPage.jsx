import { useContext } from "react";
import { CartContext } from "../Context/CartContext/CartProvider";
// import { MdDelete } from "react-icons/md";
import { FaSquarePlus } from "react-icons/fa6";
import { FaMinusSquare } from "react-icons/fa";

function CartPage() {
  const { state } = useContext(CartContext);
  console.log(state);
  return (
    <div>
      <div>
        {state.cartItem ? (
          <div className="flex"  >
            <div className="w-[900px] "  >
              {state.cartItem.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="   flex justify-evenly items-center m-5 h-56 rounded-2xl shadow-2xl shadow-black ">
                      <div>
                        <img className="h-40 rounded-2xl" src={item.image} alt="" />
                      </div>
                      <div className=" h-14 ">
                        <h1 className="text-[30px]">{item.name}</h1>

                      </div>
                      <div className=" h-14 space-y-2">
                        <h1 className=" text-red-500 text-[30px]">  Rs. {item.caloriesPerServing}</h1>
                        <button className="p-2 bg-orange-600 rounded-[6px] hover:bg-orange-800 text-white">
                          {/* <MdDelete color="red" size={30} /> */}
                          Delete
                        </button>
                      </div>
                      <div className=" h-14 space-x-2 flex justify-center items-center">
                        <button className="hover:text-gray-700"><FaMinusSquare size={30} /></button>
                        <span className="text-[30px]">{item.qty}</span>
                        <button  className="hover:text-gray-700"><FaSquarePlus size={30} /></button>

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className=" rounded-2xl w-96 m-5 shadow-2xl shadow-gray-400 h-72 flex flex-col justify-center items-center gap-y-4 border border-gray-500" >
              <h1 className="text-3xl font-bold">Order Summery</h1>
              <h1>Subtotal(0 items)</h1>
              <h1>Total</h1>
              <button className="bg-black p-3 text-white rounded-[5px] hover:bg-gray-800">Procced to checkout</button>
              <button className="bg-orange-600 p-3 text-white rounded-[5px] hover:bg-orange-800">Empty Cart</button>
            </div>
          </div>
        ) : (
          <div >Item Not Found On Cart</div>
        )}
      </div>
    </div>
  );
}

export default CartPage;

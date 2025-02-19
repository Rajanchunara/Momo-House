import { useContext } from "react";
import { CartContext } from "../Context/CartContext/CartProvider";
import { MdDelete } from "react-icons/md";

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
                        <img className="h-36 rounded-2xl" src={item.image} alt="" />
                      </div>
                      <div className=" h-14 ">
                        <h1>{item.name}</h1>

                      </div>
                      <div className=" h-14">
                        <h1 className=" text-orange-600">  Rs. {item.caloriesPerServing}</h1>
                        <button>
                          <MdDelete color="red" size={30} />
                        </button>
                      </div>
                      <div className=" h-14 space-x-2">
                        <button className="bg-gray-100 rounded-[50px] px-2.5">-</button>
                        <span>{item.qty}</span>
                        <button className="bg-gray-100 rounded-[50px] px-2.5">+</button>

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className=" rounded-2xl w-80 mt-10 shadow-2xl shadow-gray-400 h-56 flex flex-col justify-center items-center gap-y-4" >
              <h1 className="text-3xl">Order Summery</h1>
              <h1>Subtotal(0 items)</h1>
              <h1>Total</h1>
              <button className="bg-orange-600 p-3 text-white rounded-2xl">Procced to checkout</button>
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

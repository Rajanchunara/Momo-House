import { createContext, useReducer } from "react";

export const CartContext = createContext()

let initialState = {
    cartItem: [],
}
let cartReducer = (state, action) => {
    console.log("cartReducer");
    console.log(action);
    return state;
}

export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, initialState)

    return <CartContext.Provider value={{ state, dispatch }}>
        {children}
    </CartContext.Provider>
}
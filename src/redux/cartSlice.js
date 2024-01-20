import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            let isUpdated = false
            let newCartValue = [];

            // check if the product already exist, then increase the count else add it

            const updatedCart = state.cartItems.map(item => {
                if(item.product?.id === action.payload?.product?.id) {
                    item.count += 1 
                    isUpdated = true
                }
                return item
            })
            newCartValue = [...updatedCart]

            if(isUpdated) {
                state.cartItems = newCartValue 
            } else {
                newCartValue.push(action.payload)   
                state.cartItems = newCartValue 
            }
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
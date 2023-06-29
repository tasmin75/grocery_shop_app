import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0,
}

const userSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
        const newItem = action.payload
        const existingItem = state.cartItems.find(item => item.id === newItem.id)
        state.totalQuantity++

        if (!existingItem) {
            state.cartItems.push({
                id: newItem.id,
                name: newItem.name,
                price: newItem.price,
                quantity: 1,
                totalPrice: newItem.price,
            })
        }
        else {
            existingItem.quantity++
            existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
        }
        state.totalAmount = state.cartItems.reduce((total, item)=> total + Number(item.price)+Number(item.quantity))

       console.log(state.cartItems)
       console.log(newItem)
    }
  }
});

export const { addToCart } = userSlice.actions

export default userSlice.reducer;
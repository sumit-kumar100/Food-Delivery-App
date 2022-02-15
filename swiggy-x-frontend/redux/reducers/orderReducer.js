import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    OrderCart: {
        Items: []
    }
}

const orderReducer = createSlice({
    name: 'Order',
    initialState,
    reducers: {
        updateOrderCartStatus: (state, action) => {
            action.payload.Item.map((item) => {
                state.OrderCart.Items = [...state.OrderCart.Items, item]
            })
        }
    }
})

export const { updateOrderCartStatus } = orderReducer.actions
export default orderReducer.reducer
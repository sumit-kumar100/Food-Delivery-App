import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    FoodCart: {
        RestaurantDetail: {
            Res_id: null,
            Res_Name: null
        },
        Items: []
    }
}

const cartReducer = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        updateFoodCartStatus: (state, action) => {
            // Cart is Empty First Item To Cart
            if (state.FoodCart.RestaurantDetail.Res_id === null && state.FoodCart.RestaurantDetail.Res_Name === null) {
                state.FoodCart.RestaurantDetail = action.payload.RestaurantDetail
                state.FoodCart.Items = [...state.FoodCart.Items, action.payload.Item]
            }
            // Cart is Not Empty Has Item Related To a Particular Restaurant
            else if (state.FoodCart.RestaurantDetail.Res_id === action.payload.RestaurantDetail.Res_id) {
                state.FoodCart.Items = [...state.FoodCart.Items, action.payload.Item]
            }
            // If Restaurant Changes Add Item From Starting
            else {
                state.FoodCart.RestaurantDetail = action.payload.RestaurantDetail
                state.FoodCart.Items = [action.payload.Item]
            }
        },
        handleQuantity: (state, action) => {
            // If Qty is 1 and user pressed on minus Remove from Cart
            if (action.payload.value === 0) {
                state.FoodCart.Items = state.FoodCart.Items.filter((item) => {
                    return item.FoodId !== action.payload.FoodId
                })
            }
            else {
                state.FoodCart.Items.map((item) => {
                    if (item.FoodId === action.payload.FoodId) {
                        item.FoodQuantity = action.payload.value
                    }
                })
            }
        },
        EmptyFoodCart: (state) => {
            state.FoodCart.RestaurantDetail = {
                Res_id: null,
                Res_Name: null
            }
            state.FoodCart.Items = []
        }
    }
})

export const { updateFoodCartStatus } = cartReducer.actions

export const { handleQuantity } = cartReducer.actions

export const { EmptyFoodCart } = cartReducer.actions

export default cartReducer.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    SearchFocus: false,
    Counter: 0,
    HomeRestaurant: {},
    HomeCounter: 0
}

const browseReducer = createSlice({
    name: 'Browse',
    initialState,
    reducers: {
        updateBrowseStatus: (state) => {
            state.SearchFocus === false ? state.SearchFocus = true : state.SearchFocus = false
            state.Counter += 1
        },
        updateHomeRestaurant: (state, action) => {
            state.HomeRestaurant = action.payload.HomeRestaurant
        },
        updateHomeCounter: (state) => {
            state.HomeCounter += 1
        }
    }
})

export const { updateBrowseStatus } = browseReducer.actions

export const { updateHomeRestaurant } = browseReducer.actions

export const { updateHomeCounter } = browseReducer.actions

export default browseReducer.reducer
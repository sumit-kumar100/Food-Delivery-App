import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer';
import orderReducer from './reducers/orderReducer';
import browseReducer from './reducers/browseReducer'

export const store = configureStore({
    reducer: {
        Browse: browseReducer,
        Cart: cartReducer,
        Order: orderReducer,
    }
})

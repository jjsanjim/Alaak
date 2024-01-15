import { combineReducers,configureStore } from "@reduxjs/toolkit";





const reducers = combineReducers({
    team: , 
})
export type RootReducer = ReturnType<typeof reducers >

export const store = configureStore({
    reducer: reducers 
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
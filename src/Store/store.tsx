import { combineReducers, configureStore } from "@reduxjs/toolkit";
import teamReducer from "./Reducers/teamReducers";



const reducers = combineReducers({
    team: teamReducer,

})

export type RootReducer = ReturnType<typeof reducers >

export const store = configureStore({
    reducer: reducers
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch; 
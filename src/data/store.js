import { configureStore } from "@reduxjs/toolkit";
import { personajesSlice } from "./slices/personajesSlice";


export const store = configureStore({
    reducer: {
        personajes: personajesSlice.reducer 
    }
})
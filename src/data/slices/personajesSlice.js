import { createSlice } from "@reduxjs/toolkit";


export const personajesSlice = createSlice({

    name: 'RickAndMorty',
    initialState: {
        personajes: [],
        isLoading: false,
        page: 0,
    },
    reducers: {
        startLoadingPersonajes: (state, /* action */ ) => {
            
            state.isLoading = true;

        },

        //modifica los personajes
        setCharacters: (state,  action ) => {
            
            state.isLoading = false;

            const {payload} = action;

            state.personajes = payload.personajes

        }

    }
})

export const {startLoadingPersonajes, setCharacters} = personajesSlice.actions;
import { createSlice } from "@reduxjs/toolkit";


export const personajesSlice = createSlice({

    name: 'RickAndMorty',
    initialState: {
        personajes: [],
        isLoading: false,
        page: 1,
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

        },

        setPage: (state,action) =>{
            console.log(action.payload.page)
            state.page = action.payload.page
            state.personajes = []
        }

    }
})

export const {startLoadingPersonajes, setCharacters, setPage} = personajesSlice.actions;
//thunk

import { startLoadingPersonajes,setCharacters } from "../slices/personajesSlice";

import { rickAndMortyApi } from "../axios/rickAndMortyApi";

export const getCharacters = (page = 1)=>{

    return async (dispatch,getState) =>{

        //pongo en carga los pokemons
        dispatch( startLoadingPersonajes() );


        const {data} = await rickAndMortyApi.get(`/character/?page=${page}`)


        dispatch( setCharacters({personajes: data.results, page: page }) )

    }


}
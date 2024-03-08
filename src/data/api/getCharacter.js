//thunk


import { rickAndMortyApi } from "../axios/rickAndMortyApi";

/**
 * Busca un personaje por su ID
 * @param {Personaje} id 
 */
export const getCharacter = async (id)=>{

    const {data} = await rickAndMortyApi.get(`/character/${id}`)

    console.log(data);

    return data;


}
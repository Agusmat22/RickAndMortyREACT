import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'

import { startLoadingPersonajes} from '../../data/slices/personajesSlice.js'

import { getCharacters } from '../../data/api/getCharacters.js';


import './Home.css'
import { GenericLayout } from '../layout/GenericLayout.jsx';


export const Home = () => {

  const {personajes, page} = useSelector( (state)=> state.personajes );

  const dispatch = useDispatch();

  console.log(personajes);
  
  useEffect(() => {

    dispatch( getCharacters() );
  
  }, [ ])


  


  return (

    <GenericLayout>
   
      <div>

        <div className="contenedor-presentacion d-flex justify-content-center align-items-center flex-column">

          <h1 className='text-white fs-1 fw-bold text-shadow'>Ricky and Morty</h1>
          <p className='fs-4 fw-semibold'>Api</p>

        </div>

        
        
      </div>

    </GenericLayout>
    
  )
}

import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'

import { startLoadingPersonajes, setPage} from '../../data/slices/personajesSlice.js'

import { getCharacters } from '../../data/api/getCharacters.js';


import './Home.css'
import { GenericLayout } from '../layout/GenericLayout.jsx';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/Card.jsx';


export const Home = () => {

  const {personajes, page, isLoading} = useSelector( (state)=> state.personajes );

  const dispatch = useDispatch();

  
  useEffect(() => {

    if (personajes.length === 0 ) 
    {
      dispatch( getCharacters(page) );
      console.log('ME EJECUTE'); 
      
    }
     
  
  }, [ page ])


  const onChangePage = ({target})=>{
    const {id} = target;
    console.log(id)

    let valor;

    if (id === 'btn-next') 
    {
      valor = {
        page: page+1
      }

      dispatch( setPage(valor) )


    }
    else
    {
      if (page >= 2) 
      {
        valor = {
          page: page-1
        }

        dispatch( setPage(valor) )   
      } 
    }
 }

 

  


  return (

    <GenericLayout>
   
      <div className='d-flex flex-column'>

        <div className="contenedor-presentacion d-flex justify-content-center align-items-center flex-column">

          <h1 className='fw-bold text-shadow title-presentacion'>Rick and Morty</h1>
          <p className='  subTitle-presentacion'>Web ilustrativa, consumiendo una Api</p>

        </div>

        <div className='contenedor-personajes row m-0'>

          {
            (isLoading) ? <h4 className='text-white'>Loading...</h4> :

            personajes.map( per => (

              <div className="col-md-6 col-lg-4 d-flex align-items-center justify-content-center p-4" key={per.id} >
              
                <Card {...per}/>

              </div>

            ) )
              
          }
          

          <div className="numeros-pagina d-flex justify-content-center align-items-center mt-5">
            <button id='btn-back' className='btn btn-light' style={{height: '2.5rem'}} onClick={(target)=> onChangePage(target)}>{'<'}</button>
            <p className='text-white fs-2 m-0 p-4'>{page}</p>
            <button id='btn-next' className='btn btn-light' style={{height: '2.5rem'}} onClick={(target)=> onChangePage(target)}>{'>'}</button>
          </div>

        </div>

      
      
        
      </div>

    </GenericLayout>
    
  )
}

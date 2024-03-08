import React, { useEffect, useState } from 'react'
import { GenericLayout } from '../layout/GenericLayout'

import './PersonajesPage.css'
import { useNavigate, useParams } from 'react-router-dom'
import {getCharacter} from '../../data/api/getCharacter.js'

export const PersonajePage = () => {


    const [character, setCharacter] = useState({});

    const navigate = useNavigate();

    //obtengo el ID de la URL
    const {id} = useParams();

    useEffect( ()=>{

        if (Object.keys( character).length ===0) 
        {
            getCharacter(id)
                .then( (chac) => setCharacter( () => chac) )
                .catch( (err) => console.log(err));
        }

        

    }, [ id ])

    const onNavigateBack = ()=>{
        navigate(-1);
    }






  return (
    <GenericLayout>

        {
            Object.keys(character).length === 0 ? <h3 className='text-dark'>Cargado...</h3> : 
            
            <div className="pt-5 p-xl-5 mt-5 " style={{width: '100%'}}>

                <div className="row m-0 contenedor-personaje">

                    <div className="col-6 col-md-5 d-flex flex-column justify-content-center align-items-center" style={{minheight: '100%'}}>
                        <img src={character.image} alt='imagen-character' className='img-personaje img-thumbnail'/>
                    </div>

                    <div className="col-6 col-md-7 d-flex flex-column justify-content-start align-items-center" style={{minheight: '100%'}}>
                        
                        <div className="descripcion">
                            <h2 className='fs-1 mb-5 fw-bold'>{character.name}</h2>
                            <p className='fs-5' ><span className='fs-4 fw-semibold'>Especie:  </span>{character.species}</p>
                            <p className='fs-5' ><span className='fs-4 fw-semibold'>Genero:  </span>{character.gender}</p>
                            <p className='fs-5' ><span className='fs-4 fw-semibold'>Estado:  </span>{character.status}</p>
                            <p className='fs-5' ><span className='fs-4 fw-semibold'>Cantidad de episodios:  </span>{character.episode.length}</p>

                            <div className="personaje-boton mt-5 ">
                                <button className='btn btn-dark' onClick={()=> onNavigateBack()}>Volver</button>
                            </div>
                        </div>

                        

                    </div>
                    


                </div>

                

                
                
            </div>
            


        }
        
        
    </GenericLayout>
  )
}

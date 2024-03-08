import React from 'react'
import { useNavigate } from 'react-router-dom';

import './Card.css'

export const Card = ({image,name,id}) => {

    const navigate = useNavigate();


    const onNavigateCharacter = (id)=>{

        navigate(`/personaje/${id}`);
    }

  return (
    <div className="card bg-dark cont-card" style={{width: '100%', height: '100%'}}>

        <div className="row" style={{height: '100%'}}>

            <div className="col-5 ">
                <img src={image} alt='' className='card-img' style={{height: '100%'}}/>
            </div>

            <div className="col-7 d-flex flex-column align-items-center">

                <div className="card-body d-flex flex-column align-items-center justify-content-around ">
                <h5 className="card-title fs-4 text-white">{name}</h5>
                <button className='btn btn-light' onClick={()=> onNavigateCharacter(id)}>Ver mas</button>
            </div>

        </div>
    </div>
                  
                  
    </div>
  )
}

import React, { useState } from 'react'

import './SearchPage.css'
import { GenericLayout } from '../layout/GenericLayout'
import { useForm } from '../hook/useForm'
import { getCharacterByName } from '../../data/api/getCharacterByName'
import { Card } from '../components/Card'

export const SearchPage = () => {

    const [characters, setCharacters] = useState([])

    const {name,onInputChange,onResetForm} = useForm({
        name: ''
    })


    const onSearch = (event)=>{

        event.preventDefault();

        let nameNormalizado = (name.toLowerCase()).replace(/\s+/g,'+')
        console.log(nameNormalizado);

        getCharacterByName(nameNormalizado)
                        .then( (chacs) => setCharacters( chacs.results ))

    }

    const messageAlert = ()=>{

        if (characters.length === 0) 
        {
            return (
                <div className="alert alert-primary" style={{maxWidth: '40rem'}}>
                    Busque un personaje!
                </div>
            )
        }
        
        

    }


  return (
    <GenericLayout>

        <div className='container mt-5'>
            <div className="row m-0 justify-content-between">

                <div className="col-12 col-md-5 mt-4 mb-5 col-search" style={{maxWidth: '25rem'}}>
                    <h3>Buscar personaje</h3>
                    <hr />

                    <form onSubmit={onSearch}>
                        <div className="mb-3">
                            <label  className="form-label">Nombre</label>
                            <input type="text" className="form-control" name='name' onChange={onInputChange} value={name}/>
                        </div>

                        <div className='d-flex justify-content-end'>
                            <button type="submit" className="btn btn-primary">Buscar</button>
                        </div>

                    </form>
                </div>

                <div className="col-12 col-md-7">
                    
                    {messageAlert()}
                    <hr  className='mb-5'/>

                    {
                        (characters.length === 0) ? '' 
                                                  : (
                            <ul>
                                {
                                    characters.map( (chac,index) => (
                                        <li key={index} className='p-4'>
                                            <Card {...chac} />
                                        </li>
                                    ) )
                                }
                            

                            </ul>
                        )
                            


                    }
                </div>
            </div>
        </div>
        
    </GenericLayout>
  )
}

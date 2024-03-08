import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {NotFoundPage} from '../ui/pages/NotFoundPage'
import {Home} from '../ui/pages/Home'
import { PersonajePage } from '../ui/pages/PersonajePage'
import { SearchPage } from '../ui/pages/SearchPage'

export const RouterApp = () => {
  return (
    <>
        <Routes>

            <Route path='/' element={<Home />}/>

            <Route path='/search' element={<SearchPage />}/>

            {/*RUTA PARA MOSTRAR UN PERSONAJE */}
            <Route path='/personaje/:id' element={<PersonajePage />}/> 

            <Route path='/*' element={<NotFoundPage />}/>
        </Routes>
        
    </>

  )
}

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {NotFoundPage} from '../ui/pages/NotFoundPage'
import {Home} from '../ui/pages/Home'

export const RouterApp = () => {
  return (
    <>
        <Routes>

            <Route path='/' element={<Home />}/>

            <Route path='/*' element={<NotFoundPage />}/>
        </Routes>
        
    </>

  )
}

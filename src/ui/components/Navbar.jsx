import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark" style={{width: '100%'}}>

        <div className="container-fluid">

            <a className="navbar-brand" href="#">Comida Gustal</a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">         
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav ">

                    <NavLink className="nav-link" aria-current="page" to={'/'}>Menu</NavLink>
                    <NavLink className="nav-link" to={'/'}>Ubicacion</NavLink>
                    <div>
                        <NavLink className="nav-link" to={'admin'}>Admin</NavLink>
                    </div>
                </div>
            </div>

        </div>

    </nav>
  )
}
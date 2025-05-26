import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavigationBar = () => {
    return (
        <nav className="navbar navbar-expand-lg background-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex" id="navbarNavDropdown">
                    <ul className="navbar-nav flex-grow-1">
                        <li className="nav-item">
                            <NavLink to="/" className={"nav-link"} >Planes semanales</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                ABMs
                            </a>
                            <ul className="dropdown-menu">
                                <li><NavLink to="/recetas" className={"dropdown-item"} >Recetas</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                    <button className="btn btn-danger" type='button'>Salir</button>
                </div>
            </div>
        </nav>
    )
}

import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import api from '../api/axiosInstance'

export const NavigationBar = () => {

    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        api.post('/auth/logout')
        localStorage.removeItem('token');
        navigate('/login');
    }

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink to="/" className="nav-link navbar-brand">Weekly Meal Planner</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Planificador de comidas semanales</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <NavLink to="/" className={"nav-link"} >Planes semanales</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to="/planes" key="plan-link" className={"nav-link"} >Planes</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to="/recetas" key="recetas-link" className={"nav-link"} >Recetas</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to="/ingredientes" key="ingredientes-link" className={"nav-link"} >Ingredientes</NavLink>
                            </li>
                            {/* <li>
                                        <hr className="dropdown-divider" />
                                    </li> */}
                        </ul>
                        <div className=''>
                            <button type='button' className='btn btn-outline-danger w-100' onClick={handleLogout}>Cerrar sesion</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    )
}

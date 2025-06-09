import React from 'react'
import { PrivatePagesLayout } from '../layouts/PrivatePagesLayout'
import { useNavigate } from 'react-router-dom'

export const MainPage = () => {

    const navigate = useNavigate();

    const handleNavigatePlanesPage = (e) => {
        e.preventDefault();
        navigate('/planes');
    }

    const handleNavigateRecetasPage = (e) => {
        e.preventDefault();
        navigate('/recetas');
    }

    const handleNavigateIngredientesPage = (e) => {
        e.preventDefault();
        navigate('/ingredientes');
    }

    return (
        <PrivatePagesLayout>
            <br />
            <h1 className='text-center'>Inicio</h1>
            <hr />
            <div className='row g-3'>
                <div className='col-md-4 col-sm-12 botonera-principal'>
                    <button type='button' className='btn btn-primary w-100 h-100' onClick={handleNavigatePlanesPage}><h3>Planes</h3></button>
                </div>
                <div className='col-md-4 col-sm-12 botonera-principal'>
                    <button type='button' className='btn btn-primary w-100 h-100' onClick={handleNavigateRecetasPage}><h3>Recetas</h3></button>
                </div>
                <div className='col-md-4 col-sm-12 botonera-principal'>
                    <button type='button' className='btn btn-primary w-100 h-100' onClick={handleNavigateIngredientesPage}><h3>Ingredientes</h3></button>
                </div>
            </div>
        </PrivatePagesLayout>
    )
}

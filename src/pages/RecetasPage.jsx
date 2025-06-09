import React, { useState } from 'react'
import { PrivatePagesLayout } from '../layouts/PrivatePagesLayout'
import { useNavigate } from 'react-router-dom'
import { useIsMobile } from '../hooks/isMobile'

const recetasData = [
    {
        idReceta: 1,
        nombre: 'Rissoto'
    },
    {
        idReceta: 2,
        nombre: 'Sopa de letras'
    },
    {
        idReceta: 3,
        nombre: 'Deserunt nisi fugiat proident quis excepteur. Adipisicing elit occaecat Lorem ullamco aliqua ad exercitation labore do non irure ad. Cupidatat consectetur enim laboris proident ex amet adipisicing officia laborum consequat.'
    }
]

export const RecetasPage = () => {

    const navigate = useNavigate();

    const isMobile = useIsMobile();

    const [searchTerm, setSearchTerm] = useState('')

    const handleClickEditarReceta = (event) => {
        event.preventDefault();
        if (!event.target.dataset.id) return;
        navigate(`/recetas/editar-receta/${event.target.dataset.id}`);
    }

    const handleClickVerInfo = (e) => {
        e.preventDefault();
        if (!e.target.dataset.id) return;
        navigate(`/recetas/${e.target.dataset.id}`);
    }

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const recetasFiltradas = recetasData.filter(receta =>
        receta.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleNuevaReceta = (e) => {
        e.preventDefault();
        navigate('/recetas/crear-receta')
    }

    const handleGoBack = (e) => {
        e.preventDefault();
        navigate(-1);
    }

    return (
        <PrivatePagesLayout>
            <br />
            <h1>Recetas</h1>
            <hr />
            <div className='row g-2 align-items-center mb-3'>
                <div className='col-10'>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Buscar por nombre de receta...'
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
                <div className='col-2 d-flex justify-content-end'>
                    <button type='button' className='btn btn-primary w-100' onClick={handleNuevaReceta}>
                        {!isMobile ? "Nueva receta" : <i className="bi bi-plus-square"></i>}
                    </button>
                </div>
            </div>
            <div className='tbl-fixed mb-3'>
                <ul className='list-group'>
                    {recetasFiltradas.map(receta => (
                        <li className='list-group-item d-flex align-items-center justify-content-between' key={receta.idReceta}>
                            <div className='flex-grow-1 pe-3'>{receta.nombre}</div>
                            <div class="col-2 dropdown">
                                <button class="btn btn-secondary dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {isMobile ? (<i class="bi bi-three-dots-vertical"></i>) : 'Acciones'}
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a className='dropdown-item' data-id={receta.idReceta} onClick={handleClickVerInfo}>Ver detalle</a></li>
                                    <li><a className='dropdown-item' data-id={receta.idReceta} onClick={handleClickEditarReceta}>Editar receta</a></li>
                                    <li><a className='dropdown-item' >Eliminar</a></li>
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='row d-flex justify-content-end'>
                <div className='col-sm-12 col-md-2'>
                    <button type='button' className='btn btn-secondary w-100' onClick={handleGoBack}>Regresar</button>
                </div>
            </div>
        </PrivatePagesLayout>
    )
}

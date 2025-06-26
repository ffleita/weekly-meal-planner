import React, { useEffect, useState } from 'react'
import { PrivatePagesLayout } from '../layouts/PrivatePagesLayout'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useIsMobile } from '../hooks/isMobile'
import api from '../api/axiosInstance'

export const RecetasPage = () => {

    const [params, setParams] = useSearchParams();

    const navigate = useNavigate();

    const isMobile = useIsMobile();

    const [searchTerm, setSearchTerm] = useState('');
    const [listadoRecetas, setListadoRecetas] = useState([]);
    const [loadingError, setLoadingError] = useState("");
    const [showCreationAlert, setShowCreationAlert] = useState(!!params.get('creationSucceded'))


    const updateListadoRecetas = async() => {
        try {
            setLoadingError("");
            const response = await api.get('/recetas');
            setListadoRecetas(response.data);
        } catch (error) {
            console.error('Error al obtener las recetas:', error);   
            setLoadingError(error.message)
        }
    }

    useEffect(() => {
      updateListadoRecetas();
    }, [])
    

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

    const recetasFiltradas = listadoRecetas.filter(receta =>
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

    const handleCloseAlert = (e) => {
        e.preventDefault();
        setParams({});
        setShowCreationAlert(false);
        // setShowModificationAlert(false);
        // setShowEliminationAlert(false);
    }

    return (
        <PrivatePagesLayout>
            <br />
            <h1>Recetas</h1>
            <hr />
            {showCreationAlert && (<div class="alert alert-info d-flex justify-content-between" role="alert">
                Ingrediente creado correctamente
                <button type="button" className="btn-close btn-sm justify-self-end" aria-label="Close" onClick={handleCloseAlert}></button>
            </div>)}
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
            {loadingError && <div className='alert alert-danger mb-3'>{loadingError}</div>}
            <div className='tbl-fixed mb-3'>
                <ul className='list-group'>
                    {recetasFiltradas.map(receta => (
                        <li className='list-group-item d-flex align-items-center justify-content-between' key={receta.id}>
                            <div className='flex-grow-1 pe-3'>{receta.nombre}</div>
                            <div class="col-2 dropdown">
                                <button class="btn btn-secondary dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {isMobile ? (<i class="bi bi-three-dots-vertical"></i>) : 'Acciones'}
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a className='dropdown-item' data-id={receta.id} onClick={handleClickVerInfo}>Ver detalle</a></li>
                                    <li><a className='dropdown-item' data-id={receta.id} onClick={handleClickEditarReceta}>Editar receta</a></li>
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

import React, { useState } from 'react'
import { PrivatePagesLayout } from '../layouts/PrivatePagesLayout'
import { useIsMobile } from '../hooks/isMobile';
import { useNavigate } from 'react-router-dom';
import api from '../api/axiosInstance'
import { useEffect } from 'react';

export const PlanesPage = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [listadoPlanes, setListadoPlanes] = useState([]);
    const [fetchError, setFetchError] = useState('');
    const [deletionError, setDeletionError] = useState('');
    const [deletionSuccess, setDeletionSuccess] = useState(false);

    useEffect(() => {
        fetchData();
    }, [])
    
    const fetchData = async() => {
            try {
                const response = await api.get('/planes');
                setListadoPlanes(response.data);
            } catch (error) {
                console.log(error);
                
                setFetchError(error.response.data);
            }
        }

    const isMobile = useIsMobile();

    const navigate = useNavigate();

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const listadoPlanesFiltrado = listadoPlanes?.filter(plan => plan.descripcion.toLowerCase().includes(searchTerm.toLowerCase()));

    const handleVerDetallePlan = (e) => {
        e.preventDefault();
        const planId = e.currentTarget.dataset.id;
        if (!planId) return;
        navigate(`/planes/${planId}`);
    }

    const handleEliminarPlan = async(e) => {
        try {
            e.preventDefault();
            const planId = e.currentTarget.dataset.id;
            if (!planId) return;
            await api.delete(`/planes/${planId}`);
            setDeletionSuccess(true);
            fetchData();
        } catch (error) {
            setDeletionError(error.response.data);
        }
    }

    const handleCloseAlert = (e) => {
        e.preventDefault();
        setDeletionError('');
        setDeletionSuccess(false);
        setFetchError('');
    }

    const handleGoBack = (e) => {
        e.preventDefault;
        navigate(-1);
    }

    return (
        <PrivatePagesLayout>
            <br />
            <h1>Planes</h1>
            <hr />
            <div className='row g-2 align-items-center mb-3'>
                <div className='col-10'>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Buscar por nombre de plan...'
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
                <div className='col-2 d-flex justify-content-end'>
                    <button type='button' className='btn btn-primary w-100'>
                        {!isMobile ? "Nuevo plan" : <i className="bi bi-plus-square"></i>}
                    </button>
                </div>
            </div>
            {deletionError && (
                <div className="alert d-flex alert-danger justify-content-between" role="alert">
                    {deletionError}
                    <button type="button" className="btn-close btn-sm" aria-label="Close" onClick={handleCloseAlert}></button>
                </div>
                )
            }
            {deletionSuccess && (
                <div className="alert d-flex alert-success justify-content-between" role="alert">
                    El plan fue eliminado correctamente.
                    <button type="button" className="btn-close btn-sm" aria-label="Close" onClick={handleCloseAlert}></button>
                </div>
                )
            }
            {fetchError && (
                <div className="alert d-flex alert-danger justify-content-between" role="alert">
                    {fetchError}
                    <button type="button" className="btn-close btn-sm" aria-label="Close" onClick={handleCloseAlert}></button>
                </div>
            )}
            <div className='tbl-fixed mb-3'>
                <ul className='list-group'>
                    {listadoPlanesFiltrado?.map(plan => (
                        <li className='list-group-item d-flex align-items-center justify-content-between' key={plan.id}>
                            <div className='flex-grow-1 pe-3'>{plan.descripcion}</div>
                            <div className="col-2 dropdown">
                                <button className="btn btn-secondary dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {isMobile ? (<i className="bi bi-three-dots-vertical"></i>) : 'Acciones'}
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className='dropdown-item' data-id={plan.id} onClick={handleVerDetallePlan}>Ver detalle</a></li>
                                    <li><a className='dropdown-item'>Editar receta</a></li>
                                    <li><a className='dropdown-item' data-id={plan.id} onClick={handleEliminarPlan}>Eliminar</a></li>
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

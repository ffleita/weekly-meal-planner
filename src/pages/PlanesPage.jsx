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

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await api.get('/planes');
                setListadoPlanes(response.data);
            } catch (error) {
                setFetchError(error.message);
            }
        }

        fetchData();
    }, [])
    

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

    const handleGoBack = (e) => {
        e.preventDefault;
        navigate(-1);
    }

    if (fetchError) {
        return (
            <PrivatePagesLayout>
                <div class="alert alert-danger mt-2" role="alert">{fetchError}</div>
                <div className='row d-flex justify-content-end'>
                    <div className='col-sm-12 col-md-2'>
                        <button type='button' className='btn btn-secondary w-100' onClick={handleGoBack}>Regresar</button>
                    </div>
                </div>
            </PrivatePagesLayout>
        )
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
            <div className='tbl-fixed mb-3'>
                <ul className='list-group'>
                    {listadoPlanesFiltrado?.map(plan => (
                        <li className='list-group-item d-flex align-items-center justify-content-between' key={plan.id}>
                            <div className='flex-grow-1 pe-3'>{plan.descripcion}</div>
                            <div class="col-2 dropdown">
                                <button class="btn btn-secondary dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {isMobile ? (<i class="bi bi-three-dots-vertical"></i>) : 'Acciones'}
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a className='dropdown-item' data-id={plan.id} onClick={handleVerDetallePlan}>Ver detalle</a></li>
                                    <li><a className='dropdown-item'>Editar receta</a></li>
                                    <li><a className='dropdown-item'>Eliminar</a></li>
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

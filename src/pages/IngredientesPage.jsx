import { useEffect, useState } from 'react'
import { PrivatePagesLayout } from '../layouts/PrivatePagesLayout'
import { useIsMobile } from '../hooks/isMobile'
import { useNavigate, useSearchParams } from 'react-router-dom'
import api from '../api/axiosInstance'

export const IngredientesPage = () => {

    const [params, setParams] = useSearchParams();

    const [listadoIngredientes, setListadoIngredientes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showCreationAlert, setShowCreationAlert] = useState(!!params.get('creationSucceded'));
    const [showModificationAlert, setShowModificationAlert] = useState(!!params.get('modificationSucceded'));
    const [showEliminationAlert, setShowEliminationAlert] = useState(false);

    const isMobile = useIsMobile();
    const navigate = useNavigate();

    useEffect(() => {
        updateIngredientesList();
    }, [])

    const updateIngredientesList = async () => {
        try {
            const response = await api.get("/ingredientes");
            setListadoIngredientes(response.data.ingredientes)
        } catch (error) {
            console.log(error);
        }
    }

    const handleEliminarIngrediente = async (event) => {
        event.preventDefault();
        const target = event.currentTarget;
        const id = target?.dataset?.id;
        console.log('Eliminando ingrediente con id', id);
        try {
            await api.delete(`/ingredientes/${id}`);
            updateIngredientesList();
            setShowEliminationAlert(true);
        } catch (error) {
            console.error('Error al eliminar el ingrediente:', error);
        }
        // hacer un post para eliminar ingrediente
    }

    const handleClickCrearIngrediente = (event) => {
        event.preventDefault();
        navigate('/ingredientes/crear-ingrediente')
    }

    const handleGoBack = (e) => {
        e.preventDefault();
        navigate(-1);
    }

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleCloseAlert = (e) => {
        e.preventDefault();
        setParams({});
        setShowCreationAlert(false);
        setShowModificationAlert(false);
        setShowEliminationAlert(false);
    }

    const handleEditarIngrediente = (e) => {
        e.preventDefault();
        const target = e.currentTarget;
        const id = target?.dataset?.id;
        navigate(`/ingredientes/editar-ingrediente/${id}`)
    }

    const ingredientesFiltrados = listadoIngredientes.filter(ingrediente =>
        ingrediente.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <PrivatePagesLayout>
            <br />
            <h1>Ingredientes</h1>
            <hr />

            <div className='row g-2 align-items-center mb-3'>
                <div className='col-10'>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Buscar por nombre de ingrediente...'
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
                <div className='col-2 d-flex justify-content-end'>
                    <button type='button' className='btn btn-primary w-100' onClick={handleClickCrearIngrediente}>
                        {!isMobile ? "Nuevo ingrediente" : <i className="bi bi-plus-square"></i>}
                    </button>
                </div>
            </div>
            {(showCreationAlert || showModificationAlert) && (<div class="alert alert-info d-flex justify-content-between" role="alert">
                {showCreationAlert ? 'Ingrediente creado correctamente' : 'Ingrediente modificado correctamente'}
                <button type="button" className="btn-close btn-sm justify-self-end" aria-label="Close" onClick={handleCloseAlert}></button>
            </div>)}
            {showEliminationAlert && (<div class="alert alert-info d-flex justify-content-between" role="alert">
                Ingrediente eliminado correctamente
                <button type="button" className="btn-close btn-sm justify-self-end" aria-label="Close" onClick={handleCloseAlert}></button>
            </div>)}
            <div className='table-responsive fixed-table overflow-auto mb-3'>
                <table className='table table-striped table-bordered text-center align-middle'>
                    <thead>
                        <tr>
                            <th className='col'>Ingrediente</th>
                            <th className='col'>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ingredientesFiltrados.map(ingrediente => (
                            <tr>
                                <td scope='row'>{ingrediente.nombre}</td>
                                <td>
                                    <button className={`btn btn-primary me-2 ${isMobile ? 'btn-sm' : ''}`} data-id={ingrediente.id} onClick={handleEditarIngrediente}>
                                        {
                                            isMobile ? (<i class="bi bi-pencil-square"></i>) : ('Editar')
                                        }
                                    </button>
                                    <button className={`btn btn-danger ${isMobile ? 'btn-sm' : ''}`} data-id={ingrediente.id} onClick={handleEliminarIngrediente}>
                                        {
                                            isMobile ? (<i className="bi bi-trash"></i>) : ('Borrar')
                                        }
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='row d-flex justify-content-end'>
                <div className='col-sm-12 col-md-2'>
                    <button type='button' className='btn btn-secondary w-100' onClick={handleGoBack}>Regresar</button>
                </div>
            </div>
        </PrivatePagesLayout>
    )
}

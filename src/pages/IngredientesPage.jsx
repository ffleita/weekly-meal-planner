import { useEffect, useState } from 'react'
import { PrivatePagesLayout } from '../layouts/PrivatePagesLayout'
import { useIsMobile } from '../hooks/isMobile'
import { FormularioNuevoIngrediente } from '../components/FormularioNuevoIngrediente'
import { useNavigate } from 'react-router-dom'
import api from '../api/axiosInstance'

export const IngredientesPage = () => {

    const [listadoIngredientes, setListadoIngredientes] = useState([]);

    useEffect(() => {
        updateIngredientesList();
    }, [])

    
    const updateIngredientesList = async() => {
        try {
            const response = await api.get("/ingredientes");
            setListadoIngredientes(response.data.ingredientes)
        } catch (error) {
            console.log(error);
        }
    }

    const isMobile = useIsMobile();

    const navigate = useNavigate();

    const [showCreationForm, setShowCreationForm] = useState(false)

    const [searchTerm, setSearchTerm] = useState('')

    const handleEliminarIngrediente = async(event) => {
        event.preventDefault();
        const target = event.currentTarget;
        const id = target?.dataset?.id;
        console.log('Eliminando ingrediente con id', id);
        try {
            await api.delete(`/ingredientes/${id}`);
            updateIngredientesList();
        } catch (error) {
            console.error('Error al eliminar el ingrediente:', error);
        }
        // hacer un post para eliminar ingrediente
    }

    const showForm = (event) => {
        event.preventDefault();
        setShowCreationForm(true);
    }

    const handleShowList = (event) => {
        event.preventDefault();
        setShowCreationForm(false);
    }

    const handleGoBack = (e) => {
        e.preventDefault();
        navigate(-1);
    }

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const ingredientesFiltrados = listadoIngredientes.filter(ingrediente =>
        ingrediente.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <PrivatePagesLayout>
            <br />
            <h1>Ingredientes</h1>
            <hr />

            {!showCreationForm && (<>
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
                        <button type='button' className='btn btn-primary w-100' onClick={showForm}>
                            {!isMobile ? "Nuevo ingrediente" : <i className="bi bi-plus-square"></i>}
                        </button>
                    </div>
                </div>
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
                                        <button className='btn btn-danger' data-id={ingrediente.id} onClick={handleEliminarIngrediente}>
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
            </>)}

            {showCreationForm && (
                <FormularioNuevoIngrediente handleGoBack={handleShowList} />
            )}
        </PrivatePagesLayout>
    )
}

import React from 'react'
import { PrivatePagesLayout } from '../layouts/PrivatePagesLayout'
import { useNavigate } from 'react-router-dom'

const recetasData = [
    {
        idReceta: 1,
        nombre: 'Rissoto1',
        username: 'ffleitas'
    },
    {
        idReceta: 2,
        nombre: 'Rissoto2',
        username: 'ffleitas'
    },
    {
        idReceta: 3,
        nombre: 'Rissoto3',
        username: 'ffleitas'
    },
    {
        idReceta: 4,
        nombre: 'Rissoto4',
        username: 'ffleitas'
    },
    {
        idReceta: 5,
        nombre: 'Rissoto5',
        username: 'ffleitas'
    },
    {
        idReceta: 6,
        nombre: 'Rissoto6',
        username: 'ffleitas'
    },
    {
        idReceta: 7,
        nombre: 'Rissoto7',
        username: 'ffleitas'
    },
    {
        idReceta: 8,
        nombre: 'Rissoto8',
        username: 'ffleitas'
    },
]

export const RecetasPage = () => {

    const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault();
        if (!event.target.parentElement?.parentElement?.id) return;
        navigate(`/recetas/${event.target.parentElement.parentElement.id}`);
    }

    return (
        <PrivatePagesLayout>
            <div className='container-fluid main-container'>
                <br />
                <h1 className='text-center'>ABM de Recetas</h1>
                <hr />
                <div className='container tbl-container'>
                    <div className='table tbl-fixed'>
                        <table className='table table-striped table-bordered text-center'>
                            <thead>
                                <tr>
                                    <th scope='col'>#</th>
                                    <th scope='col'>Nombre</th>
                                    <th scope='col'>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Aquí se pueden mapear las recetas desde un estado o props */}
                                { recetasData?.map((receta) => (
                                    <tr key={receta.idReceta} id={receta.idReceta}>
                                        <th scope='row'>{receta.idReceta}</th>
                                        <td>{receta.nombre}</td>
                                        <td>
                                            <button className='btn btn-primary' onClick={handleClick}>Editar</button>
                                            <button className='btn btn-danger'>Eliminar</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            
                        </table>
                    </div>
                </div>
            </div>
        </PrivatePagesLayout>
    )
}

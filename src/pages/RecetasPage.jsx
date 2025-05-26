import React from 'react'
import { PrivatePagesLayout } from '../layouts/PrivatePagesLayout'
import { useNavigate } from 'react-router-dom'

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
                    <div className='table-responsive tbl-fixed'>
                        <table className='table table-striped table-bordered text-center'>
                            <thead>
                                <tr>
                                    <th scope='col'>ID</th>
                                    <th scope='col'>Nombre</th>
                                    <th scope='col'>Descripción</th>
                                    <th scope='col'>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Aquí se pueden mapear las recetas desde un estado o props */}
                                <tr id='1'>
                                    <td>1</td>
                                    <td>Receta de Ejemplo</td>
                                    <td>Descripción de la receta de ejemplo.</td>
                                    <td>
                                        <button className='btn btn-primary' onClick={handleClick}>Editar</button>
                                        <button className='btn btn-danger'>Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Receta de Ejemplo</td>
                                    <td>Descripción de la receta de ejemplo.</td>
                                    <td>
                                        <button className='btn btn-primary'>Editar</button>
                                        <button className='btn btn-danger'>Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Receta de Ejemplo</td>
                                    <td>Descripción de la receta de ejemplo.</td>
                                    <td>
                                        <button className='btn btn-primary'>Editar</button>
                                        <button className='btn btn-danger'>Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Receta de Ejemplo</td>
                                    <td>Descripción de la receta de ejemplo.</td>
                                    <td>
                                        <button className='btn btn-primary'>Editar</button>
                                        <button className='btn btn-danger'>Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Receta de Ejemplo</td>
                                    <td>Descripción de la receta de ejemplo.</td>
                                    <td>
                                        <button className='btn btn-primary'>Editar</button>
                                        <button className='btn btn-danger'>Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Receta de Ejemplo</td>
                                    <td>Descripción de la receta de ejemplo.</td>
                                    <td>
                                        <button className='btn btn-primary'>Editar</button>
                                        <button className='btn btn-danger'>Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Receta de Ejemplo</td>
                                    <td>Descripción de la receta de ejemplo.</td>
                                    <td>
                                        <button className='btn btn-primary'>Editar</button>
                                        <button className='btn btn-danger'>Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Receta de Ejemplo</td>
                                    <td>Descripción de la receta de ejemplo.</td>
                                    <td>
                                        <button className='btn btn-primary'>Editar</button>
                                        <button className='btn btn-danger'>Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Receta de Ejemplo</td>
                                    <td>Descripción de la receta de ejemplo.</td>
                                    <td>
                                        <button className='btn btn-primary'>Editar</button>
                                        <button className='btn btn-danger'>Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Receta de Ejemplo</td>
                                    <td>Descripción de la receta de ejemplo.</td>
                                    <td>
                                        <button className='btn btn-primary'>Editar</button>
                                        <button className='btn btn-danger'>Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Receta de Ejemplo</td>
                                    <td>Descripción de la receta de ejemplo.</td>
                                    <td>
                                        <button className='btn btn-primary'>Editar</button>
                                        <button className='btn btn-danger'>Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Receta de Ejemplo</td>
                                    <td>Descripción de la receta de ejemplo.</td>
                                    <td>
                                        <button className='btn btn-primary'>Editar</button>
                                        <button className='btn btn-danger'>Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Receta de Ejemplo</td>
                                    <td>Descripción de la receta de ejemplo.</td>
                                    <td>
                                        <button className='btn btn-primary'>Editar</button>
                                        <button className='btn btn-danger'>Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Receta de Ejemplo</td>
                                    <td>Descripción de la receta de ejemplo.</td>
                                    <td>
                                        <button className='btn btn-primary'>Editar</button>
                                        <button className='btn btn-danger'>Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Receta de Ejemplo</td>
                                    <td>Descripción de la receta de ejemplo.</td>
                                    <td>
                                        <button className='btn btn-primary'>Editar</button>
                                        <button className='btn btn-danger'>Eliminar</button>
                                    </td>
                                </tr>
                            </tbody>
                            
                        </table>
                    </div>
                </div>
            </div>
        </PrivatePagesLayout>
    )
}

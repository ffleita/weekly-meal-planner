import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';

const initialIngredientForm = {
    nombreIngrediente: '',
    cantidad: '',
    unidad: ''
}

const initialStepForm = {
    stepName: ''
}

export const RecetasDetailDesktop = () => {

    const navigate = useNavigate();

    const { nombreIngrediente, cantidad, unidad, onInputChange: onInputIngredientChange } = useForm(initialIngredientForm);

    const { stepName, onInputChange: onInputStepChange } = useForm(initialStepForm);

    // Aquí podrías hacer una llamada a la API para obtener los detalles de la receta

    // Llamada para obtener ingredientes disponibles y unidades de medida

    const [disabled, setDisabled] = useState(false)
    const [listadoIngredientes, setListadoIngredientes] = useState({ '1': 'Zanahoria', '2': 'Cebolla', '3': 'Ajo', '4': 'Pimiento', '5': 'Zanahorss' });

    const handleDeleteIngredient = (event) => {
        event.preventDefault();
        setDisabled(true);
        const ingredientId = event.target.dataset.id;
        // Aquí podrías hacer una llamada a la API para eliminar el ingrediente
        console.log(`Eliminar ingrediente con ID: ${ingredientId}`);
        setDisabled(false);
    }

    const handleAddIngredient = (event) => {
        event.preventDefault();
        setDisabled(true);
        const nombreIngrediente = document.getElementById('nombreIngrediente').value;
        const cantidad = document.getElementById('cantidad').value;
        const unidad = document.getElementById('unidad').value;

        // Aquí podrías hacer una llamada a la API para agregar el ingrediente
        console.log(`Agregar ingrediente: ${nombreIngrediente}, Cantidad: ${cantidad}, Unidad: ${unidad}`);
        setDisabled(false);
    }

    const handleAddStep = (event) => {
        event.preventDefault();
        setDisabled(true);
        const stepName = document.getElementById('stepName').value;
        // Aquí podrías hacer una llamada a la API para agregar el paso
        console.log(`Agregar paso: ${stepName}`);
        setDisabled(false);
    }

    const handleGoBack = (event) => {
        event.preventDefault();
        navigate(-1);
    }

    const handoleDeleteStep = (event) => {
        event.preventDefault();
        setDisabled(true);
        const stepId = event.target.dataset.id;
        // Aquí podrías hacer una llamada a la API para eliminar el paso
        console.log(`Eliminar paso con ID: ${stepId}`);
        setDisabled(false);
    }

    return (
        <div className='container-fluid main-container'>
            <br />
            <div className='d-flex justify-content-between align-items-center'>
                <h1>Nombre receta</h1>
                <button className='btn btn-secondary' onClick={handleGoBack} type="button">Regresar</button>
            </div>
            <hr />
            <div className='row'>
                <div className='col border-end receta-detail-row'>
                    <div className='container-fluid ps-3'>
                        <h3>Ingredientes</h3>
                        <div className='container tbl-container'>
                            <div className='table-responsive tbl-fixed'>
                                <table className='table table-striped table-bordered text-center align-middle'>
                                    <thead id='ingredients-table-body'>
                                        <tr>
                                            <th scope='col'>Ingrediente</th>
                                            <th scope='col'>Cantidad</th>
                                            <th scope='col'>Unidad de medida</th>
                                            <th scope='col'>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <select className='form-select' name="nombreIngrediente" id="nombreIngrediente" required value={nombreIngrediente} onChange={onInputIngredientChange}>
                                                    <option value="">Seleccionar Ingrediente</option>
                                                    {Object.entries(listadoIngredientes).map(([id, nombre]) => (
                                                        <option key={id} value={id}>{nombre}</option>
                                                    ))}
                                                </select>
                                            </td>
                                            <td>
                                                <input className='form-control' type="number" name="cantidad" id="cantidad" placeholder='Cantidad' required value={cantidad} onChange={onInputIngredientChange} />
                                            </td>
                                            <td>
                                                <select className='form-select' name="unidad" id="unidad" value={unidad} onChange={onInputIngredientChange} required>
                                                    <option value="">Seleccionar medida</option>
                                                    <option value="g">g</option>
                                                    <option value="kg">kg</option>
                                                    <option value="ml">ml</option>
                                                    <option value="l">l</option>
                                                    <option value="unidad">unidad</option>
                                                </select>
                                            </td>
                                            <td>
                                                <button className='btn btn-primary' type="button" onClick={handleAddIngredient} disabled={disabled}>Agregar</button>
                                            </td>
                                        </tr>
                                        {/* Aquí se pueden mapear las recetas desde un estado o props */}
                                        <tr id='1'>
                                            <td>Zanahoria</td>
                                            <td>1</td>
                                            <td>unidad</td>
                                            <td>
                                                <button className='btn btn-danger' data-id="1" type="button" onClick={handleDeleteIngredient}>Quitar</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Cebolla</td>
                                            <td>2</td>
                                            <td>unidad</td>
                                            <td>
                                                <button className='btn btn-danger' data-id="2" type="button" onClick={handleDeleteIngredient}>Quitar</button>
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col border-start receta-detail-row'>
                    <div className='container-fluid ps-3'>
                        <h3>Pasos</h3>
                        <div className='container tbl-container'>
                            <div className='table-responsive tbl-fixed'>
                                <table className='table table-striped table-bordered text-center align-middle'>
                                    <thead>
                                        <tr>
                                            <th scope='col'>N°</th>
                                            <th scope='col'>Descripción</th>
                                            <th scope='col'>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody id='steps-table-body'>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <input className='form-control' type="text" name="stepName" id="stepName" placeholder='Siguiente paso' required value={stepName} onChange={onInputStepChange} />
                                            </td>
                                            <td>
                                                <button className='btn btn-primary' type="button" onClick={handleAddStep} disabled={disabled}>Agregar</button>
                                            </td>
                                        </tr>
                                        {/* Aquí se pueden mapear las recetas desde un estado o props */}
                                        <tr>
                                            <td className='text-center'>1</td>
                                            <td>Pelar la zanahoria</td>
                                            <td>
                                                <button data-id="1" onClick={handoleDeleteStep} className='btn btn-danger' type="button">Quitar</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='text-center'>2</td>
                                            <td>Picar el ajo</td>
                                            <td>
                                                <button data-id="2" onClick={handoleDeleteStep} className='btn btn-danger' type="button">Quitar</button>
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

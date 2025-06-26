import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PrivatePagesLayout } from '../layouts/PrivatePagesLayout';
import { useForm } from '../hooks/useForm';
import api from '../api/axiosInstance'

const initialForm = {
    nombre: '',
    ingredientesReceta: [],
    pasos: ''
}

const formValidations = {
    nombre: [(value) => value.length >= 1, 'El nombre es obligatorio.'],
    ingredientesReceta: [(value) => value.length >= 1, 'Los ingredientes son obligatorios.'],
    pasos: [(value) => value.length >= 10, 'Los pasos ingresados no son suficientes.']
}

const initialFormIngredientes = {
    ingrediente: '',
    cantidad: '',
    medida: ''
}

export const CrearRecetaPage = () => {

    const { nombre, ingredientesReceta, pasos, formState, isFormValid, nombreValid,
        pasosValid, onInputChange, onResetForm, setFormState } = useForm(initialForm, formValidations);

    const { ingrediente, medida, cantidad, formState: formStateIngredientes, onInputChange: onInputChangeIngredientes, onResetForm: onResetFormIngredientes } = useForm(initialFormIngredientes);

    const navigate = useNavigate();

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isCreationInProgress, setIsCreationInProgress] = useState(false);
    const [ingredienteRepetido, setIngredienteRepetido] = useState('');
    const [ingredientes, setIngredientes] = useState([]);
    const [medidas, setMedidas] = useState([]);
    const [creationError, setCreationError] = useState('');

    useEffect(() => {
        inicializarListadosFormulario();
    }, []);


    const handleGoBack = (e) => {
        e.preventDefault();
        navigate(-1);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setIsCreationInProgress(true);
        setFormSubmitted(true);

        if (!isFormValid) return;
        
        try {
            await api.post('/recetas', formState);
            onResetForm();
            navigate('/recetas?creationSucceded=true');
        } catch (error) {
            setCreationError(error.response.data);
        }
        setIsCreationInProgress(false);
    }

    const handleAgregarIngredienteAReceta = (e) => {
        e.preventDefault();
        setIngredienteRepetido('');

        if (!formStateIngredientes.ingrediente) return;

        const ingredienteExistente = ingredientesReceta.find(ingrediente =>
            ingrediente.ingrediente == formStateIngredientes.ingrediente
        );

        if (ingredienteExistente) {
            onResetFormIngredientes();
            setIngredienteRepetido(ingredientes?.find(el => el.id == formStateIngredientes.ingrediente).nombre);
            return;
        }

        ingredientesReceta.push(formStateIngredientes);
        onResetFormIngredientes();
    }

    const handleRemoverElemento = (e) => {
        e.preventDefault();
        setIngredienteRepetido('');
        const idIngrediente = e.currentTarget.dataset.id;
        setFormState({
            ...formState,
            ingredientesReceta: ingredientesReceta.filter(ingrediente => ingrediente.ingrediente !== idIngrediente)
        });
    }

    const inicializarListadosFormulario = async () => {
        try {
            const ingredientesResp = await api.get('/ingredientes');
            setIngredientes(ingredientesResp.data.ingredientes);
            const medidasResp = await api.get('/medidas');
            setMedidas(medidasResp.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <PrivatePagesLayout>
            <br />
            <h1>Recetas</h1>
            <hr />
            { creationError && (<div class="alert alert-danger" role="alert">{creationError}</div>) }
            
            <form onSubmit={handleSubmit} className='container g-4'>
                <div className="row mb-3">
                    <div className='col'>
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input
                            type="text"
                            className={`form-control ${nombreValid && formSubmitted ? 'is-invalid' : ''}`}
                            name="nombre"
                            id="nombre"
                            value={nombre}
                            onChange={onInputChange}
                            placeholder="Ingrese un nombre para su receta..."
                        />
                        {nombreValid && formSubmitted && <div className="invalid-feedback">{nombreValid}</div>}
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-4">
                        <label className="form-label">Ingrediente</label>
                        <select
                            className='form-control'
                            name='ingrediente'
                            value={ingrediente}
                            onChange={onInputChangeIngredientes}
                        >
                            <option value="">Seleccione</option>
                            {ingredientes.map(ing => (
                                <option key={ing.id} value={ing.id}>{ing.nombre}</option>
                            ))}
                        </select>
                    </div>

                    <div className="col-md-3">
                        <label className="form-label">Cantidad</label>
                        <input
                            type="number"
                            className='form-control'
                            name='cantidad'
                            placeholder='Ingrese la cantidad requerida...'
                            value={cantidad}
                            onChange={onInputChangeIngredientes}
                        />
                    </div>

                    <div className="col-md-3">
                        <label className="form-label">Medida</label>
                        <select
                            className='form-control'
                            name='medida'
                            value={medida}
                            onChange={onInputChangeIngredientes}
                        >
                            <option value="">Seleccione</option>
                            {medidas?.map(m => (
                                <option key={m.id} value={m.id}>{m.nombre}</option>
                            ))}
                        </select>
                    </div>

                    <div className="col-md-2 d-flex align-items-end mt-3">
                        <button type="button" className="btn btn-success w-100" onClick={handleAgregarIngredienteAReceta}>Agregar ingrediente</button>
                    </div>

                </div>
                <div className='row'>
                    <div className='col'>
                        {ingredienteRepetido && (
                            <div
                                class="alert alert-warning text-center"
                                role="alert"
                            >
                                Ya agrego <strong>{ingredienteRepetido}</strong> a sus ingredientes, no se admiten repetidos.
                            </div>

                        )}
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <label className='form-label'>Ingredientes agregados</label>
                        {ingredientesReceta.length == 0 && !formSubmitted && (
                            <div
                                className="alert alert-info text-center"
                                role="alert"
                            >
                                No hay ingredientes seleccionados
                            </div>
                        )}
                        {ingredientesReceta && (
                            <ul className='list-group'>
                                {
                                    ingredientesReceta.map(ingrediente => (
                                        <li className='list-group-item d-flex justify-content-between' key={ingrediente.ingrediente}>
                                            {`${ingredientes.find(el => el.id == ingrediente.ingrediente).nombre} - ${ingrediente.cantidad} ${medidas.find(m => m.id == ingrediente.medida).nombre}`}
                                            <button data-id={ingrediente.ingrediente} type='button' className='btn btn-close' onClick={handleRemoverElemento}></button>
                                        </li>
                                    ))
                                }
                            </ul>
                        )}
                    </div>
                </div>
                <div className='row'>
                    <div className="mb-3">
                        <label htmlFor="pasos" className="form-label">Pasos a seguir</label>
                        <textarea
                            className={`form-control ${pasosValid && formSubmitted ? 'is-invalid' : ''}`}
                            name="pasos"
                            id="pasos"
                            rows="5"
                            value={pasos}
                            onChange={onInputChange}
                        ></textarea>
                        {pasosValid && formSubmitted && (<div className="invalid-feedback">{pasosValid}</div>)}
                    </div>
                </div>


                <div className='row d-flex justify-content-end g-2'>
                    <div className='col-sm-12 col-md-2'>
                        <button type='submit' className='btn btn-primary w-100' disabled={isCreationInProgress}>Crear receta</button>
                    </div>
                    <div className='col-sm-12 col-md-2'>
                        <button type='button' className='btn btn-secondary w-100' onClick={handleGoBack}>Regresar</button>
                    </div>
                </div>
            </form>
        </PrivatePagesLayout>
    )
}

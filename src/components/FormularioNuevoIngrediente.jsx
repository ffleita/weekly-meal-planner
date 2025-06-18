import { useState } from "react";
import { useForm } from "../hooks/useForm";
import api from '../api/axiosInstance'
import { useNavigate } from "react-router-dom";


const initialForm = {
    nombre: ""
}

const formValidations = {
    nombre: [(value) => value.length >= 1, 'El nombre del ingrediente es obligatorio']
}

export const FormularioNuevoIngrediente = ({ handleGoBack }) => {

    const { formState, nombre, onInputChange, isFormValid, nombreValid, onResetForm } = useForm(initialForm, formValidations);

    const [formSubmitted, setFormSubmitted] = useState(false);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState('');

    const handleAgregarIngrediente = async (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        setLoading(true);
        setError('');
        if (!isFormValid) {
            onResetForm();
            setLoading(false);
            return;
        };
        try {
            const response = await api.post("/ingredientes", formState);
            handleGoBack();
        } catch (err) {
            setError(err.response?.data?.errorMessage);
        }
        setLoading(false);
    }

    return (
        <form onSubmit={handleAgregarIngrediente} onReset={onResetForm}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre del Ingrediente</label>
                <input
                    type="text"
                    className={`form-control ${nombreValid && formSubmitted ? 'is-invalid' : ''}`}
                    name="nombre"
                    id="nombreIngrediente"
                    placeholder="Ingrese un nombre para su ingrediente..."
                    value={nombre}
                    onChange={onInputChange}
                />
                {nombreValid && formSubmitted && <div className="invalid-feedback">{nombreValid}</div>}
            </div>
            <div className="row mb-2">
                <div className="col">
                    {error && (<div
                        class="alert alert-danger"
                        role="alert"
                    >
                        {error}
                    </div>)}

                </div>
            </div>
            <div className='row d-flex justify-content-end g-2'>
                <div className="col-sm-12 col-md-2">
                    <button type="submit" className="btn btn-primary w-100">Crear</button>
                </div>
                <div className="col-sm-12 col-md-2">
                    <button type="button" className="btn btn-secondary w-100" onClick={handleGoBack}>Regresar</button>
                </div>
            </div>
        </form>
    )
}

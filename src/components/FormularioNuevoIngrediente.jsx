import { useState } from "react";
import { useForm } from "../hooks/useForm";


const initialForm = {
    name: ""
}

const formValidations = {
    name: [(value) => value.length >= 1, 'El nombre del ingrediente es obligatorio']
}

export const FormularioNuevoIngrediente = ({handleGoBack}) => {

    const { formState, name, onInputChange, isFormValid, nameValid, onResetForm } = useForm(initialForm, formValidations);

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleAgregarIngrediente = (event) => {
        event.preventDefault();
        console.log('Agregando ingrediente');
        setFormSubmitted(true);
        console.log(isFormValid);

        if (!isFormValid) return;

        handleGoBack(event);
        // lógica para guardar ingrediente aquí
    }

    return (
        <form onSubmit={handleAgregarIngrediente} onReset={onResetForm}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre del Ingrediente</label>
                <input
                    type="text"
                    className={`form-control ${nameValid && formSubmitted ? 'is-invalid' : ''}`}
                    name="name"
                    id="nombreIngrediente"
                    placeholder="Ingrese un nombre para su ingrediente..."
                    value={name}
                    onChange={onInputChange}
                />
                {nameValid && formSubmitted && <div className="invalid-feedback">{nameValid}</div>}
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

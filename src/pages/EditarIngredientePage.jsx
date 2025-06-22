import React, { useEffect, useState } from 'react'
import { PrivatePagesLayout } from '../layouts/PrivatePagesLayout'
import api from '../api/axiosInstance';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { useIsMobile } from '../hooks/isMobile';

const initialForm = {
    id: -1,
    nombre: ''
}

const formValidations = {
    nombre: [(value) => value.length >= 0, 'El nombre es obligatorio']
}

export const EditarIngredientePage = () => {

    const {idIngrediente} = useParams();

    const navigate = useNavigate();

    const isMobile = useIsMobile();

    const [formSubmitted, setFormSubmitted] = useState(false);
    const {nombre, formState, setFormState, isFormValid, onInputChange, nombreValid} = useForm(initialForm, formValidations);

    useEffect(() => {
        loadIngredienteData(idIngrediente);
    }, [idIngrediente])

    const loadIngredienteData = async (id) => {
        setFormState((await api.get(`/ingredientes/${id}`)).data);
    }

    const handleGoBack = (e) => {
        e.preventDefault();
        navigate(-1);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setFormSubmitted(true);
        if (!isFormValid) return;
        try {
            await api.put('/ingredientes', formState);
            navigate('/ingredientes?modificationSucceded=true')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <PrivatePagesLayout>
            <br />
            <h1>Modificacion de ingrediente</h1>
            <hr />
            <form onSubmit={handleSubmit}>
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
                {nombreValid && formSubmitted && <div className="invalid-feedback">{nombreValid}</div>}
                <button type="submit" className={`btn btn-primary me-2 ${isMobile ? 'btn-sm w-100 mb-2' : ''}`}>Guardar</button>
                <button type="button" className={`btn btn-secondary me-2  ${isMobile ? 'btn-sm w-100' : ''}`} onClick={handleGoBack}>Regresar</button>
            </form>

        </PrivatePagesLayout>
    )
}

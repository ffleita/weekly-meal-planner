import { PrivatePagesLayout } from '../layouts/PrivatePagesLayout'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react';

const recetaDummy = {
    nombre: 'Sopa de garrote',
    ingredientesReceta: [
        {
            ingrediente: 1,
            cantidad: 2,
            medida: 'unidad'
        }
    ],
    pasos: 'Nisi esse excepteur fugiat eu.'
}

const ingredientes = [
    {
        id: 1,
        nombre: 'zanahoria'
    },
    {
        id: 2,
        nombre: 'brocoli'
    },
    {
        id: 3,
        nombre: 'leche'
    },
    {
        id: 4,
        nombre: 'milanesa'
    }
]

export const RecetasDetailPage = () => {

    // Extraigo el idReceta de los parámetros de la URL
    const { idReceta } = useParams();

    const [receta] = useState(recetaDummy);

    const navigate = useNavigate();

    const handleGoBack = (e) => {
        e.preventDefault();
        navigate(-1);
    }

    return (
        <PrivatePagesLayout>
            <br />
            <h4><u>Receta</u></h4>
            <h1>{receta.nombre}</h1>
            <hr />

            <div className='row mb-3'>
                <div className='col'>
                    <h6>Ingredientes</h6>
                    <ul className="list-group">
                        {receta.ingredientesReceta.map(ingredienteReceta => (
                            <li id={ingredienteReceta.ingrediente} className="list-group-item">{ingredientes.find(e => e.id == ingredienteReceta.ingrediente).nombre} - {ingredienteReceta.cantidad} {ingredienteReceta.medida}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='row mb-3'>
                <div className='col'>
                    <h6>Pasos</h6>
                    <div className="">
                        <textarea className="form-control" name="pasos" id="pasos" rows="5" disabled>{receta.pasos}</textarea>
                    </div>
                </div>
            </div>
            <div className='row d-flex justify-content-end'>
                <div className='col-sm-12 col-md-2'>
                    <button type='button' className='btn btn-secondary w-100' onClick={handleGoBack}>Regresar</button>
                </div>
            </div>


        </PrivatePagesLayout>
    )
}

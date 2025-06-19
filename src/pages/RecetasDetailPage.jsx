import { PrivatePagesLayout } from '../layouts/PrivatePagesLayout'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../api/axiosInstance'

export const RecetasDetailPage = () => {

    const { idReceta } = useParams();

    const [receta, setReceta] = useState()

    const [ingredientes, setIngredientes] = useState([])

    const [medidas, setMedidas] = useState([])

    const [error, setError] = useState("")

    const navigate = useNavigate();

    const handleGoBack = (e) => {
        e.preventDefault();
        navigate(-1);
    }

    const loadRecetaDetailPageData = async (id) => {
        try {
            const recetaDetailResponse = await api.get(`/recetas/${id}`);
            setReceta(recetaDetailResponse.data);
            const ingredientesResponse = await api.get('/ingredientes');
            setIngredientes(ingredientesResponse.data.ingredientes);
            const medidasResponse = await api.get('/medidas');
            setMedidas(medidasResponse.data);
        } catch (e) {
            setError(e.message)
        }
    }

    useEffect(() => {
        loadRecetaDetailPageData(idReceta);
    }, [])

    return (
        <PrivatePagesLayout>
            {!error && receta && (
                <>
                    <br />
                    <h4><u>Receta</u></h4>
                    <h1>{receta.nombre}</h1>
                    <hr />
                    <div className='row mb-3'>
                        <div className='col'>
                            <h6>Ingredientes</h6>
                            <ul className="list-group">
                                {
                                    receta.ingredientesReceta.map(ingredienteReceta => {
                                        const ingrediente = ingredientes.find(e => e.id === ingredienteReceta.ingrediente);
                                        const medida = medidas.find(m => m.id === ingredienteReceta.medida);
                                        return (
                                            <li key={ingredienteReceta.ingrediente} className="list-group-item">
                                                {ingrediente ? ingrediente.nombre : ''} - {ingredienteReceta.cantidad} {medida ? medida.nombre : ''}
                                            </li>
                                        )
                                    })
                                }
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
                </>
            )}
            {error && (<div className='alert alert-danger'>{error}</div>)}
        </PrivatePagesLayout>
    )
}

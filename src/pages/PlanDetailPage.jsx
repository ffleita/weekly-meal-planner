import { useEffect, useState } from 'react'
import { PrivatePagesLayout } from '../layouts/PrivatePagesLayout'
import api from '../api/axiosInstance'
import { useNavigate, useParams } from 'react-router-dom'

export const PlanDetailPage = () => {

    const { idPlan } = useParams();

    const navigate = useNavigate();

    const [planSemanal, setPlanSemanal] = useState({
        id: null,
        descripcion: '',
        dias: []
    })

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await api.get(`/planes/${idPlan}`);
            setPlanSemanal(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleGoToRecetaDetailPage = (e) => {
        e.preventDefault();
        const recetaId = e.currentTarget.dataset.idReceta;
        navigate(`/recetas/${recetaId}`);
    }

    return (
        <PrivatePagesLayout>
            <br />
            <h4><u>Plan:</u></h4>
            <h1>{planSemanal?.descripcion}</h1>
            <hr />
            <div className="container my-4">
                <div className="row fw-bold bg-light border">
                    <div className="col-2 py-2 text-center">Día</div>
                    <div className="col-5 py-2 text-center">Almuerzo</div>
                    <div className="col-5 py-2 text-center">Cena</div>
                </div>

                {planSemanal.dias.map(dia => {
                    const almuerzo = dia.almuerzoReceta;
                    const cena = dia.cenaReceta;
                    
                    return (
                        <div className="row border-bottom">
                            <div className="col-2 py-2 text-center fw-bold">{dia.diaSemana}</div>
                            <div className="col-5 py-2">
                                <div className="d-flex align-items-center">
                                    <span className="flex-grow-1 text-truncate" title={almuerzo.nombre}>
                                        {almuerzo.nombre}
                                    </span>
                                    <button className="btn btn-sm btn-success ms-2" data-id-receta={almuerzo.id} title="Ver detalle" onClick={handleGoToRecetaDetailPage}>
                                        <i className="bi bi-search"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="col-5 py-2">
                                <div className="d-flex align-items-center">
                                    <span className="flex-grow-1 text-truncate" title={cena.nombre}>
                                        {cena.nombre}
                                    </span>
                                    <button className="btn btn-sm btn-success ms-2" data-id-receta={cena.id} title="Ver detalle" onClick={handleGoToRecetaDetailPage}>
                                        <i className="bi bi-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </PrivatePagesLayout>
    )
}

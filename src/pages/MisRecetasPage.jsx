import { useNavigate } from "react-router-dom";
import { PrivatePagesLayout } from "../layouts/PrivatePagesLayout"
import { useIsMobile } from "../hooks/isMobile";


const recetasData = [
    {
        idReceta: 1,
        nombre: 'Rissoto1'
    },
    {
        idReceta: 2,
        nombre: 'Rissoto2'
    },
    {
        idReceta: 3,
        nombre: 'Rissoto3'
    },
    {
        idReceta: 4,
        nombre: 'Rissoto4'
    },
    {
        idReceta: 5,
        nombre: 'Rissoto5'
    }
];

export const MisRecetas = () => {

    const navigate = useNavigate();

    const isMobile = useIsMobile();

    const handleVerMasClick = (event) => {
        event.preventDefault();
        const recetaId = event.target.closest('.card').id;
        if (!recetaId) return;
        navigate(`/recetas/${recetaId}`);
    }

    return (
        <PrivatePagesLayout>
            <div className="container-fluid">
                <br />
                <h1 className="text-center">Mis recetas</h1>
                <hr />
                <div className="row">
                    {recetasData.map((receta) => (
                        <div key={receta.idReceta} className="col-12 col-md-6 col-lg-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{receta.nombre}</h5>
                                    <p className="card-text">Descripción de la receta {receta.nombre}.</p>
                                    <div class="dropdown">
                                        <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            { isMobile ? (<i class="bi bi-three-dots"></i>) : 'Acciones' }
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href={`/mis-recetas/${receta.idReceta}`}>Editar</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PrivatePagesLayout>
    )
}

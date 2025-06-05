import { useNavigate, useParams } from "react-router-dom";
import { useIsMobile } from "../hooks/isMobile";
import { CrearIngrediente } from "../components/CrearIngrediente";
import { PrivatePagesLayout } from "../layouts/PrivatePagesLayout";

const recetaData = {
    idReceta: 1,
    nombre: 'Rissoto1',
    username: 'ffleitas',
    ingredientes: [
        { idIngrediente: 1, nombre: 'Arroz', cantidad: '1', unidad: 'taza' },
        { idIngrediente: 2, nombre: 'Caldo de verduras', cantidad: '2', unidad: 'taza' },
        { idIngrediente: 3, nombre: 'Cebolla', cantidad: '1', unidad: 'unidad' },
        { idIngrediente: 4, nombre: 'Queso parmesano', cantidad: '50', unidad: 'ge' }
    ],
    pasos: [
        'Picar la cebolla y sofreírla en una sartén con un poco de aceite.',
        'Agregar el arroz y cocinar por unos minutos.',
        'Añadir el caldo de verduras poco a poco, removiendo constantemente.',
        'Cuando el arroz esté cocido, agregar el queso parmesano y mezclar bien.'
    ]
};

export const MisRecetasDetailPage = () => {

    const { idReceta } = useParams();

    const isMobile = useIsMobile();

    const navigate = useNavigate();

    const handleRedirectCrearIngredientePage = (event) => {
        event.preventDefault();
        navigate(`/mis-recetas/${idReceta}/crear-ingrediente`);
    }

    return (
        <PrivatePagesLayout>
            <div className="container-fluid">
                <br />
                <h1 className="text-center">Detalle de la receta</h1>
                <hr />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>{recetaData.nombre}</h2>
                            <p><strong>Creada por:</strong> {recetaData.username}</p>
                            <h3>Ingredientes</h3>
                            <ul>
                                {recetaData.ingredientes.map(ingrediente => (
                                    <li key={ingrediente.idIngrediente}>
                                        {ingrediente.cantidad} {ingrediente.unidad} de {ingrediente.nombre}
                                    </li>
                                ))}
                            </ul>
                            <button className="btn btn-primary" type="button" onClick={handleRedirectCrearIngredientePage}>
                                Agregar ingrediente
                            </button>
                            <hr />
                            <h3>Pasos</h3>
                            <ol>
                                {recetaData.pasos.map((paso, index) => (
                                    <li key={index}>{paso}</li>
                                ))}
                            </ol>
                            <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#crearIngredienteModal">Agregar paso</button>
                        </div>
                    </div>
                </div>
            </div>
        </PrivatePagesLayout>
    )
}

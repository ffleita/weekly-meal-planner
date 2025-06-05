import { useNavigate } from "react-router-dom";
import { PrivatePagesLayout } from "../layouts/PrivatePagesLayout";

export const AgregarIngredientePage = () => {

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const currentTarget = event.currentTarget;
        const values = {
            nombreIngrediente: currentTarget.nombreIngrediente.value,
            cantidadIngrediente: currentTarget.cantidadIngrediente.value,
            medidaIngrediente: currentTarget.medidaIngrediente.value
        }
    }

    const handleGoBack = (event) => {
        event.preventDefault();
        navigate(-1);
    }

    return (
        <PrivatePagesLayout>

            <div className='container-fluid'>
                <br />
                <h1 className='text-center'>Agregar Ingrediente</h1>
                <hr />
                <div className='row'>
                    <div className='col-12 col-md-6 offset-md-3'>
                        <form onSubmit={handleSubmit} className='row g-3'>
                            <div className='col-12 col-md-6'>
                                <label htmlFor='nombreIngrediente' className='form-label'>Nombre del Ingrediente</label>
                                <input type='text' className='form-control' id='nombreIngrediente' placeholder='Ej: Arroz' />
                            </div>
                            <div className='col-12 col-md-3'>
                                <label htmlFor='cantidadIngrediente' className='form-label'>Cantidad del Ingrediente</label>
                                <input type='number' className='form-control' id='cantidadIngrediente' />
                            </div>
                            <div className='col-12 col-md-3'>
                                <label htmlFor='medidaIngrediente' className='form-label'>Medida</label>
                                <select className="form-select" id='medidaIngrediente' defaultValue={"0"}>
                                    <option value="0">Elegir...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className='col-12'>
                                <button type='submit' className='btn btn-primary me-2'>Crear Ingrediente</button>
                                <button type='button' className='btn btn-secondary' onClick={handleGoBack}>Volver</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </PrivatePagesLayout>
    )
}

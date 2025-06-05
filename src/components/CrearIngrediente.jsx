
export const CrearIngrediente = ({ingredientes}) => {

    const handleSave = () => {
        const nombre = document.getElementById('nombreIngrediente').value;
        const cantidad = document.getElementById('cantidadIngrediente').value;
        const unidad = document.getElementById('unidadMedidaIngrediente').value;

        if (nombre && cantidad && unidad) {
            ingredientes.push({ nombre, cantidad, unidad });
            // Reset form fields
            document.getElementById('nombreIngrediente').value = '';
            document.getElementById('cantidadIngrediente').value = '';
            document.getElementById('unidadMedidaIngrediente').selectedIndex = 0;
        } else {
            alert('Por favor, complete todos los campos.');
        }
    }

  return (
    <div className='modal fade' id='crearIngredienteModal' tabIndex='-1' aria-labelledby='crearIngredienteModalLabel' aria-hidden='true'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='crearIngredienteModalLabel'>Crear Ingrediente</h5>
            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
          </div>
          <div className='modal-body'>
            <form>
              <div className='mb-3'>
                <label htmlFor='nombreIngrediente' className='form-label'>Nombre del Ingrediente</label>
                <input type='text' className='form-control' id='nombreIngrediente' />
              </div>
              <div className='mb-3'>
                <label htmlFor='cantidadIngrediente' className='form-label'>Cantidad</label>
                <input type='number' className='form-control' id='cantidadIngrediente' />
              </div>
              <div className='mb-3'>
                <label htmlFor='unidadMedidaIngrediente' className='form-label'>Unidad de Medida</label>
                <select className='form-select' id='unidadMedidaIngrediente'>
                  <option value='' disabled selected>Seleccione una unidad</option>
                  <option value='gramos'>Gramos</option>
                  <option value='litros'>Litros</option>
                  <option value='unidades'>Unidades</option>
                </select>
              </div>
            </form>
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Cerrar</button>
            <button type='button' className='btn btn-primary' onClick={handleSave}>Guardar Ingrediente</button>
          </div>
        </div>
      </div>
    </div>
  )
}

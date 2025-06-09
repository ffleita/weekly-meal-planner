
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
    <></>
  )
}

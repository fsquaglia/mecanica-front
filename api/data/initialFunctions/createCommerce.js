
import commerceCreate from '../../src/Controllers/commerceControllers/commercCreateController.js';


const productCr = async(table, data)=>{
for (let i = 0; i <data.length; i++) {
    const selec = data[i];

    try {
        // Llamar al controlador post aquí, usando los datos del json
        await commerceCreate(selec.razonsocial, selec.fantasia, selec.direccion, selec.ciudad, selec.idProvince, selec.telefono, selec.celular, selec.email,selec.instagram, selec.facebook, selec.otro);

        console.log(`Successfully: ${selec.fantasia}`);
    } catch (error) {
        console.error(`Error when posting : ${selec.fantasia}: ${error.message}`);
    }
}
}

export default productCr;
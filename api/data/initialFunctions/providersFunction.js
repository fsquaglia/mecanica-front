import providersCreate from '../../src/Controllers/commerceControllers/providersCreateController.js'

const providerFunction = async(typeData)=>{
    for (let i = 0; i <typeData.length; i++) {
        const data = typeData[i];
    
        try {
            // Llamar al controlador post aquí, usando los datos del json
            await providersCreate(data.razonsocial, data.contacto, data.fantasia, data.direccion, data.ciudad, data.telefono, data.email, data.otro, data.img, data.idProvince, data.categories);
    
            console.log(`Successfully created: ${data.razonsocial}`);
        } catch (error) {
            console.error(`Error when posting : ${data.razonsocial}: ${error.message}`);
        }
    }
    }

export default providerFunction;

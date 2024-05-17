import { User, Car , sequelize} from "../../db.js";

//*======= Actualizar vehiculo ==================
const updateCar = async (id, newData) => {
  //console.log('hasta el controller va bien ', newData )
    try {
      if (!id) {
        const error = new Error("No se encontró un id valido"); error.status = 400; throw error;
      }
      const car = await Car.findByPk(id);
  
      if (!car) {
        const error = new Error("Vehiculo no encontrado"); error.status = 404; throw error;
      }
      const parsedData = {
        patent: newData.patent,
        mark: newData.mark,
        model: newData.model,
        year: newData.year, //Date.parse(newData.year) este no va
        motorNum: newData.motorNum,
        chassisNum: newData.chassisNum, 
        observations: newData.observations,
        picture:newData.picture,
        enable: Boolean(newData.enable) // Convertir a booleano
      };
      // Actualizar todos los campos
      const carUp = await car.update(parsedData);
      return carUp;
    } catch (error) {
      //console.error("Error al actualizar el vehiculo");
      throw error;
    }
  };

  
  export default updateCar;
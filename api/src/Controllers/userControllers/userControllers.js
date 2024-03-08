import {User} from '../../db.js'
const getUsers = async () => {
    try {
        const response = await User.findAll({
            where:{
                deletedAt:false,
            }
        });
        const data = response;
        if(!data){throw new Error('Users not found')};
        return data;
    } catch (error) {
        throw error;
    }
}
const userById = async (id)=>{
    try {
        const response = await User.findByPk(id,{
            where:{
                deletedAt:false,
            }
        });
        const data = response;
        if(!data){throw new Error('User not found!')}
        return data;
    } catch (error) {
        throw error;
    }
}

const updateUser = async(id, newData)=>{
    try {
        if(!id){
            throw new Error('No se encontró un id valido')
        }
        const user = await User.findByPk(id);
    
        if (!user) {
          throw new Error("Usuario no encontrado");
        }
       
          const parsedData = {
            name: newData.name,
            picture: newData.picture,
            surname: newData.surname,
            role: parseFloat(newData.role), //convertir a numero
            country: newData.country,
            enable: Boolean(newData.enable), // Convertir a booleano
          };
          // Actualizar todos los campos
          const userUp =await user.update(parsedData);
          console.log('soy la imagen: '+userUp.picture)
        return userUp;
      } catch (error) {
        console.error("Error al actualizar el usuario");
       throw error;
      }
}

const deleteUser= async (id)=>{
    console.log('Todavia no estoy lista (deberia borrar)')
}

export {getUsers, userById, updateUser, deleteUser }


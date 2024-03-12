import { User, Car } from "../../db.js";

const getUsers = async () => {
  try {
    const response = await User.findAll({
      where: {
        deletedAt: false,
      },
      include: [
        {
          model: Car,
          attributes: ["patent", "id"],
          through: { attributes: [] },
        },
      ],
    });
    const data = response;
    if (!data) {
      throw new Error("Users not found");
    }
    return data;
  } catch (error) {
    throw error;
  }
};
const userByQuery = async (numberId) => {
  try {
    const response = await User.findOne({
      where: {
        numberId: numberId,
        deletedAt: false,
      },
      include: [
        {
          model: Car,
          attributes: ["patent", "id"],
          through: { attributes: [] },
        },
      ],
    });
    const data = response;
    if (!data) {
      throw new Error("Car not found");
    }
    return data;
  } catch (error) {
    throw error;
  }
};
const userById = async (id) => {
  try {
    const response = await User.findByPk(id, {
      where: {
        deletedAt: false,
      },
    });
    const data = response;
    if (!data) {
      throw new Error("User not found!");
    }
    return data;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (id, newData) => {
  try {
    if (!id) {
      throw new Error("No se encontró un id valido");
    }
    const user = await User.findByPk(id);

    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    if (!newData.password) {
      const parsedData = {
        email: newData.email,
        name: newData.name,
        picture: newData.picture,
        typeId: newData.typeId,
        numberId: newData.numberId,
        role: parseFloat(newData.role), //convertir a numero
        country: newData.country,
        enable: Boolean(newData.enable), // Convertir a booleano
      };
      // Actualizar todos los campos
      const userUp = await user.update(parsedData);
      return userUp;
    } else {
      const hashedPassword = await bcrypt.hash(newData.password, 10);
      const parsedData = {
        password: hashedPassword,
      };
      const userUp = await user.update(parsedData);
      return userUp;
    }
  } catch (error) {
    console.error("Error al actualizar el usuario");
    throw error;
  }
};

const deleteUser = async (id) => {
  console.log("Todavia no estoy lista (deberia borrar)");
};

export { getUsers, userByQuery, userById, updateUser, deleteUser };

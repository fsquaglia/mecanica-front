import { Provider, CategoryProvider, Province } from "../../db.js";
import { Op } from "sequelize";
import parseProvider from "./helpers/parseProviders.js";

const getProviderById = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: "Se requiere id de Proveedor" });
  }
  try {
    const data = await Provider.findOne({
      where: { id },
      include: [
        { model: CategoryProvider, attributes: ["descCategory"] },
        { model: Province, attributes: ["descProvince"] },
      ],
    });

    const cleanData = parseProvider(data, false)
    res.status(200).json(cleanData);
  } catch (error) {
    res.status(400).json({ error: "Error al obtener los Proveedores" });
  }
};

export default getProviderById;

import {
  Province,
  Category,
  Product,
  Provider,
  CategoryPost,
  Post,
  CategoryProvider,
  Commerce,
  ImagesConfig,
  CategoryImg,
} from "../../db.js";

const reinit = async (req, res) => {
  const provincesArray = [
    { idProvince: 1, descProvince: "Buenos Aires" },
    { idProvince: 2, descProvince: "CABA" },
    { idProvince: 3, descProvince: "Catamarca" },
    { idProvince: 4, descProvince: "Chaco" },
    { idProvince: 5, descProvince: "Chubut" },
    { idProvince: 6, descProvince: "Córdoba" },
    { idProvince: 7, descProvince: "Corrientes" },
    { idProvince: 8, descProvince: "Entre Ríos" },
    { idProvince: 9, descProvince: "Formosa" },
    { idProvince: 10, descProvince: "Jujuy" },
    { idProvince: 11, descProvince: "La Pampa" },
    { idProvince: 12, descProvince: "La Rioja" },
    { idProvince: 13, descProvince: "Mendoza" },
    { idProvince: 14, descProvince: "Misiones" },
    { idProvince: 15, descProvince: "Neuquén" },
    { idProvince: 16, descProvince: "Río Negro" },
    { idProvince: 17, descProvince: "Salta" },
    { idProvince: 18, descProvince: "San Juan" },
    { idProvince: 19, descProvince: "San Luis" },
    { idProvince: 20, descProvince: "Santa Cruz" },
    { idProvince: 21, descProvince: "Santa Fe" },
    { idProvince: 22, descProvince: "Santiago del Estero" },
    { idProvince: 23, descProvince: "Tierra del Fuego" },
    { idProvince: 24, descProvince: "Tucumán" },
  ];

  const providersArray = [
    {
      razonsocial: "BlueBlood SA",
      fantasia: "Idrogeno",
      direccion: "Calle xxx",
      ciudad: "Rosario",
      telefono: "5434100000",
      email: "idrogeno@idgn.com",
      idProvince: 21,
      idCategory: 1,
    },
    {
      razonsocial: "Batuk algo SA",
      fantasia: "Batuk",
      direccion: "Avellaneda xxx",
      ciudad: "CABA",
      telefono: "5411000000",
      email: "batuk@batuk.com",
      idProvince: 2,
      idCategory: 2,
    },
  ];
  const categoriesImages = [
    { descCategory: "blog" },
    { descCategory: "carrusel" },
    { descCategory: "principal" },
    { descCategory: "servicios" },
  ];

  try {
    //vaciar y rellenar Modelo CategoryImg
    await CategoryImg.destroy({ where: {} });
    await CategoryImg.bulkCreate(categoriesImages);

    //vaciar y rellenar Modelo Province
    await Province.destroy({ where: {} });
    await Province.bulkCreate(provincesArray);

    //vaciar y rellenar Modelo Client
    // await Client.destroy({ where: {}, truncate: true });
    //carga de registros a Client
    // await Client.create({
    //   razonsocial: "Cliente nro 01",
    //   fantasia: "",
    //   direccion: "Calle Uno Nro 1000",
    //   ciudad: "San Criatóbal",
    //   idProvince: 21,
    //   telefono: "543408",
    //   email: "",
    // });
    // await Client.create({
    //   razonsocial: "Cliente nro 02",
    //   fantasia: "",
    //   direccion: "Alguna calle",
    //   ciudad: "San Criatóbal",
    //   idProvince: 21,
    //   telefono: "543408666666",
    //   email: "",
    // });

    //vaciar y rellenar Comemrce
    await Commerce.destroy({ where: {} });
    await Commerce.create({
      razonsocial: "Boscarol Ariel",
      fantasia: "Boscarol Hnos.",
      direccion: "Güemes 853",
      ciudad: "San Cristóbal",
      idProvince: 21,
      telefono: "543408427110",
      email: "boscarol@boscarol.com.ar",
      instagram: "",
      facebook: "",
      otro: "",
      isMyCommerce: true,
    });

    //crear categorías y subcategorías
    await Category.destroy({ where: {} });
    await Category.create({
      name: "Aceites",
      description: "Aceites lubricantes",
    });
    await Category.create({
      name: "Motor",
      description: "Repuestos de motores",
    });
    await Category.create({
      name: "Tren delantero",
      description: "Repuestos relacionados con el tren delantero",
    });
    await Category.create({
      name: "Aceites sintéticos",
      description: "Línea de aceites sintéticos",
      parentId: 1,
    });
    await Category.create({
      name: "Correas de distribución",
      description: "Correas de distribución para motores",
      parentId: 2,
    });

    //vaciar y rellenar Product
    await Product.destroy({ where: {} });
    await Product.create({
      nameProduct: "Aceite SAE15W40 x 1 lt",
      descProduct: "Aceite SAE15W40 envase por litro marca XXX",
      subcategoryId: 4,
      stock: 2,
    });
    await Product.create({
      nameProduct: "Aceite SAE20W50",
      descProduct: "Aceite SAE20W50 envase por litro marca YYY",
      subcategoryId: 4,
      stock: 1,
    });

    //vaciar y crear Proveedores y sus Categorías
    await CategoryProvider.create({ descCategory: "Genéricos" });
    await CategoryProvider.create({ descCategory: "Aceites" });
    await Provider.destroy({ where: {} });
    await Provider.bulkCreate(providersArray);

    //vaciar y crear Categorias de Post, y Posts
    await CategoryPost.destroy({ where: {} });
    await CategoryPost.bulkCreate([
      { descCategory: "Aceites" },
      { descCategory: "Sevice periódico" },
      { descCategory: "Refrigerantes" },
    ]);

    await Post.create({
      titlePost: "El mantenimiento",
      textPost: "lorem ipsun",
      idCategory: 2,
      published: false,
      viewFavPost: true,
    });
    await Post.create({
      titlePost: "Los aceites",
      textPost: "lorem ipsun",
      idCategory: 1,
      published: true,
      viewFavPost: false,
    });

    console.log("okey bien");
    res.status(200).json({ message: "Todo ok" });
  } catch (error) {
    res.status(400).json({ error: error.message }); //"ocurrió algún error"
  }
};

export default reinit;

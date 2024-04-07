// En un archivo donde se manejan las operaciones relacionadas con el llenado de datos (por ejemplo, fillData.js)
import dataBulk from './dataBulk.js';
import { Province, Category, Product, Provider, CategoryPost, Post, CategoryProvider, Commerce, ImagesConfig, CategoryImg,} from '../../src/db.js'; // Importa tus modelos de tablas
import { categoriesImages, category, categoryPost, commerce, products, providers, provinces, tipMecanica} from '../archives/index.js'
import createCommerce from './createCommerce.js';



// Usa la función dataBulk para diferentes tablas y conjuntos de datos
const fillTables =async (table, data)=>{
    await dataBulk(Province, provinces, 0);
    await dataBulk(CategoryImg, categoriesImages,0);
    await dataBulk(Provider, providers,0);
    await dataBulk(CategoryPost, categoryPost,0);
    await dataBulk(Post, tipMecanica,0);

    const existdatas = await Commerce.findAll();
    if (existdatas.length ===0 ) {
     // Hacer una lectura de los datos para llenar la tabla
    await createCommerce(commerce);
    console.log(`"The tables are filled successfully!"`);
         } else {
           console.log(`"The tables already contains data"`);//
         }
}

export default fillTables;

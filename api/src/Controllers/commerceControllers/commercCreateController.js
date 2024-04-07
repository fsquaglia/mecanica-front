import {Commerce, Province, sequelize} from '../../db.js';

const commerceCreate = async(razonsocial, fantasia, direccion, ciudad, idProvince, telefono, celular, email,instagram, facebook, otro)=>{
    try { 
        let transaction;
        // Iniciar una transacción
        transaction = await sequelize.transaction();

        const provFound = await Province.findByPk(idProvince, {transaction})
        if(!provFound){throw new Error('Esta provincia no existe')};

        const datafound = await Commerce.findOne({
            where:{
                razonsocial:razonsocial,
                otro: otro,
            },transaction
        });
        if(datafound){throw new Error('Este comercio o filial ya existe')}
        const newdata = await Commerce.create({
           razonsocial:razonsocial,
           fantasia:fantasia,
           direccion:direccion,
           ciudad:ciudad,
           telefono:telefono,
           celular: celular,
           email: email,
           instagram: instagram,
           facebook: facebook,
           otro: otro,
        }, {transaction})
       await newdata.addProvince(provFound, {transaction})
       await transaction.commit();

       return newdata
        
    } catch (error) {
        if (transaction) {
            await transaction.rollback();
        }
        throw error;
    }
}

export default
    commerceCreate


// razonsocial: "Boscarol Ariel A. y Pablo A.",
// fantasia: "Boscarol Hnos.",
// direccion: "Güemes 853",
// ciudad: "San Cristóbal",
// idProvince: 21,
// telefono: "54 3408 427110",
// email: "boscarolhnos@gmail.com",
// instagram: "https://www.instagram.com/",
// facebook: "https://www.facebook.com/",
// otro: "",
// celular: "54 3408 675420",
// isMyCommerce: true,
// datePost: new Date(),
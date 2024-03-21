import {Service} from '../../db.js'

const getService = async () => {
    try {
        const response = await Service.findAll({
            where:{
                deletedAt:false,
            }
        });
        const data = response;
        if(data.length===0){throw new Error('The service table is empty')};
        return data;
    } catch (error) {
        throw error;
    }
}
const serviceById = async (id)=>{
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

export{
    getService,
    serviceById
}
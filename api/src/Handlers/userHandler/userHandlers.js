import {getUsers,userByQuery, userById, updateUser, deleteUser }from '../../Controllers/userControllers/userControllers.js'
import resetPassword from '../../Controllers/userControllers/resetPassword.js'

export default {
 getUserHand : async (req, res)=>{
    const {numberId}=req.query;
    try {
        if(numberId){
            const response = await userByQuery(numberId)
            res.status(200).json(response)   
        }else{
            const response = await getUsers()
            res.status(200).json(response) 
        }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
},


 getDetailUserHand : async (req, res)=>{
    const {id} = req.params;
    try {
       const response = await userById(id)
       res.status(200).json(response) 
    } catch (error) {
        res.status(400).json({error: error.message})
    }
},

 updateUserHand : async (req, res)=>{
    const {id} = req.params;
    const newData = req.body;
    try {
       const response = await updateUser(id, newData)
       res.status(200).json(response) 
    } catch (error) {
        res.status(500).json({error: error.message})
    }
},

 delUserHand : async (req, res)=>{
    const {id} = req.params;
    try {
       const response = await deleteUser(id)
       res.status(200).json(response) 
    } catch (error) {
        res.status(400).json({error: error.message})
    }
},
resetUserhand : async(req,res)=>{
    const {id}= req.params;
    try {
        const response = await resetPassword(id)
        res.status(200).json(response) 
    } catch (error) {
        res.status(400).json({error: error.message})
    }
},
}

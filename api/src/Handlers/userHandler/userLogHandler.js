import {userLogin, userCreate}from '../../Controllers/userControllers/userLogin.js'

const userLogHand = async (req, res)=>{
    const {email, password}=req.body;
    try {
       const response = await userLogin(email, password)
       res.status(200).json(response) 
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

const userCreateHand = async (req, res)=>{
    const {email, password}=req.body;
    try {
       const response = await userCreate(email, password)
       res.status(201).json(response) 
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

export {userLogHand, userCreateHand}
const User = require('../Models/User');

const userData = async (req , res)=>{
    try {
        const data = req.body;

        const newUser =  new User(data);

        const response = await newUser.save()
        
        console.log('data saved successfully')

        res.status(200).json({
            success:true,
            response:response
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error:'Internal server error'})
    }
}


const getUser = async (req , res) =>{
 
    try {
        const response = await User.find()

        console.log('data fetched successfully ')
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(500).json({error:'Internal Server error'})
    }
    
}


const singalUser = async (req , res) =>{
     
    try {

        const {email} = req.body;
        
        if(!email){
            return res.status(401).send('Email is required')
        }
        const user = await User.findOne({email})

        if(!user){
            return res.status(401).json({error:'User with this email is not found'})
        } 
        res.send(user)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error:'Internal server error'})
    }
}


module.exports = {userData,getUser,singalUser};
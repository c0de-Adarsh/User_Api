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


module.exports = {userData,getUser};
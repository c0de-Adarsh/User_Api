const User = require('../Models/User');
const { response } = require('../Routes/userRoutes');

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


  const softDeleteUser = async (req, res) =>{

   try {
    const userId = req.params.id;

    const updateUser = await User.findByIdAndUpdate(
        userId,
        {isDeleted: true},
        {new:true}
    )

    if(!updateUser){
        return res.status(200).json({error:'User not found'})
    }

    res.status(200).json({
        message:'user soft delete successfull',
        user:updateUser
    })
   } catch (error) {
      console.log(error)
      res.status(500).json({error:'Internal server error'})
   }


  }


  const findDelelteUser = async (req , res) =>{
       
    try {
        const deleteUser = await User.find({isDeleted:true})

        if(deleteUser.length === 0){
            return res.status(401).json({
                message:"No user found"
            })
        }

        res.status(200).json({
            success:true,
            user:deleteUser
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal server error'})
    }
    
  }


    const deleteUserList = async (req , res) =>{

        try {
            
            const userId = req.params.id
           const deleteUser = await User.findByIdAndDelete(userId)

           if(!deleteUser){
            return res.status(401).json({error:'User not found'})
           }

           console.log('data delete successfully')
           res.status(200).json({message:'User delete successfully'})
        } catch (error) {
            console.log(error)
            res.status(500).json({error:'Internal server error'})
        }
    }

     const updateUser = async (req , res) =>{

        try {
            const userId = req.params.id;
            const updateUser = req.body;
            const response = await User.findByIdAndUpdate(userId,updateUser,{
                runValidators:true,
                new:true
            })

            if(!response){
                return res.status(401).json({message:'user not found'})
            }

            console.log('data update successfully')

            res.status(200).json({
                message:'User updated succesfully',
                response
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({error:'Internal server error'})
        }

        
     }

     const updateUserPassword = async (req , res) =>{
        try {
            const userId = req.params.id
            const {password} = req.body;
           

            if(!password){
                return res.status(401).json({error:'password are required'})
            }


            const updateUserPassword = await User.findByIdAndUpdate(userId,{password},{
                runValidators:true,
                new:true
            })

            
            if(!updateUserPassword){
                return res.status(401).json({error:'user not found'});
            }

            console.log('user update successfully')

            res.status(200).json({
                message:'user password updated successfully',
                response:updateUserPassword
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({error:'internal server error'})
        }

     }

     const updateCityDob = async (req , res) =>{

        try {
            
            const userId = req.params.id
            const {city,dob} = req.body;

            if(!city || !dob){
                return res.status(401).json({error:'invalid credentails'})
            }

            const updateCityDob = await User.findByIdAndUpdate(userId,
                {dob,city},
                {
                    runValidators:true,
                    new:true
                }
                
            )

            if(!updateCityDob){
                return res.status(401).json({error:'user not found'})
            }

            res.status(200).json({
                message:'user dob and city update successfully',
                user:updateCityDob
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({error:'Internal server error'})
        }
     }

module.exports = {userData,getUser,singalUser,softDeleteUser,findDelelteUser,deleteUserList,updateUser,updateUserPassword,updateCityDob};
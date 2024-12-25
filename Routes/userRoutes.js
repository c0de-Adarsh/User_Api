const express = require('express')
const router = express()


const {userData,getUser,singalUser,softDeleteUser,findDelelteUser,deleteUserList,updateUser,updateUserPassword,updateCityDob} = require('../Controllers/userController')


router.route('/user').post(userData)
router.route('/getuser').get(getUser)
router.route('/singaluser').post(singalUser)
router.route('/softdelete/:id').put(softDeleteUser)
router.route('/finddeleteuser').get(findDelelteUser)
router.route('/deleteuser/:id').delete(deleteUserList)
router.route('/updateuser/:id').put(updateUser)
router.route('/updateuserpassword/:id').put(updateUserPassword)
router.route('/updatecitydob/:id').put(updateCityDob)

module.exports = router;
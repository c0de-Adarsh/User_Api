const express = require('express')
const router = express()


const {userData,getUser,singalUser} = require('../Controllers/userController')


router.route('/user').post(userData)
router.route('/getuser').get(getUser)
router.route('/singaluser').post(singalUser)

module.exports = router;
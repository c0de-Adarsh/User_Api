const express = require('express')
const router = express()


const {userData,getUser} = require('../Controllers/userController')


router.route('/user').post(userData)
router.route('/getuser').get(getUser)

module.exports = router;
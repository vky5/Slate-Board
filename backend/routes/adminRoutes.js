const express = require('express');

const adminController = require('../controllers/adminController');

const router = express.Router(); 


// TODO add authentication middleware to protect admin route

router
    .route('/')
    .get(adminController.adminAllUser)
    .post(adminController.adminNewUser);


// making changes into account by admin

router
    .route('/:id')
    .get(adminController.adminGetUserById)
    .patch(adminController.adminEditUser)
    .delete(adminController.adminDeleteUser);
    

module.exports = router;
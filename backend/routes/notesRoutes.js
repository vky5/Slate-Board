const express = require('express');

const notesController = require('../controllers/notesController');
const authController = require('../controllers/authController');

const router = express.Router();

router
    .route('/')
    .get(
        authController.jwtValidate,
        notesController.getNotes
    )
    .post(
        authController.jwtValidate,
        notesController.saveNotes
    )





module.exports = router;
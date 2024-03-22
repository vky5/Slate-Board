const express = require('express');
const notesController = require('../controllers/notesController');

const router = express.Router();

router
    .route('/')
    .get(notesController.showAllNotes)
    .post(notesController.saveNotes);





module.exports = router
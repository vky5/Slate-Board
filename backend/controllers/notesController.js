const StoredData = require('../models/notesModel');
const UserData = require('../models/userModel');

const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');


// to save the notes of the user in the database
const saveNotes = catchAsync(async (req, res)=>{
    
    const newNote = await StoredData.create({
        heading: req.body.heading,
        author: req.user.username,
        tags: req.body.tags,
        body: req.body.body
    })

    res.status(201).json({
        status: 'success',
        data: newNote
    })
})


// to get all notes of a certain user 
const getNotes = catchAsync(async (req, res, next) => {
    const aggregatedNotes = await StoredData.aggregate([
        {
            $match: {
                author: req.user.username
            }
        }
    ]);

    if (aggregatedNotes.length === 0) {
        return next(new AppError('No notes found for the user', 404));
    }

    res.status(200).json({
        status: 'success',
        data: aggregatedNotes
    });
});



module.exports = {saveNotes, getNotes};
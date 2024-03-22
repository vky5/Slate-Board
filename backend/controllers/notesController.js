const StoredData = require('../models/notesModel');
const catchAsync = require('../utils/catchAsync');

const saveNotes = catchAsync(async (req, res)=>{
    const newNote = await StoredData.create({
        heading: req.body.heading,
        tags: req.body.tags,
        body: req.body.body
    })

    res.status(201).json({
        status: 'success',
        data: newNote
    })
})

const getNotes = catchAsync(async (req, res, next)=>{
    const userNote = await StoredData.findById(req.params.id);

    res.status(200).json({
        status: 'success',
        data: userNote
    })
})

const showAllNotes = catchAsync( async (req, res , next)=>{
    const notes = await StoredData.find();

    res.status(200).json({
        status: 'success',
        data: notes
    })
})

module.exports = {saveNotes, getNotes, showAllNotes};
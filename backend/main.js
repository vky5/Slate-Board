const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');


const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PATCH,DELETE'
}))

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res)=>{
    res.status(200).send("Hey Boii")
})

app.use('/api/v1/auth', userRoutes); 

module.exports = app;

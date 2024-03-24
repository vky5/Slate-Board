const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const notesRoute = require('./routes/notesRoutes');

const globalErrorHandler = require('./controllers/globalErrorHandler');

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PATCH,DELETE'
}))

app.use(morgan('dev'));
app.use(express.json());

app.disable('x-powered-by');
app.get('/', (req, res)=>{
    res.status(200).send("Hey Boii")
})

app.use('/api/v1/auth', userRoutes); 
app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/notes', notesRoute);

app.use(globalErrorHandler);


module.exports = app;

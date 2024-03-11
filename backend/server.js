const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./main');

dotenv.config({path: './config.env'});

const DB = process.env.DATABASE;

mongoose.connect(DB)
.then(con=>{
    console.log('DB connection successful');
}).catch(err=>{
    console.error(err);
});


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server listening on port ${port}...`);
})
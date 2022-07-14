const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const createError = require('http-errors')

const userRoutes = require('./routes/userRoute');
const questionRoutes = require('./routes/questionRoute')
const answerRoutes = require('./routes/answerRoute')
require("dotenv").config()

const app = express();

//middlewares
app.use(express.json({limit:'30mb', extended: true}))
app.use(express.urlencoded({limit:'30mb', extended: true}))
app.use(cors());

//routes
app.use('/user',userRoutes)
app.use('/questions',questionRoutes)
app.use('/answer',answerRoutes)

app.get('/',(req,res) => {
    res.send('This is stack overflow clone')
})

// Errors
app.use((req,res,next) => {
    next(createError(404,"Not Found"))
});

app.use((err,req,res,next) => {
    res.status(err.status || 500);
    res.send({
        error : {
            status: err.status || 500,
            message : err.message
        }
    })
})

const dbURI = process.env.MONGODB_URL;

mongoose.connect(
    dbURI,
    { useNewUrlParser:true , useUnifiedTopology:true},
    (err) => {
        if(err) throw err;
        console.log("db connected");
    }
)
   
const PORT = process.env.PORT || 5000;

app.listen(PORT ,() => {
    console.log("server running on port", PORT);
})

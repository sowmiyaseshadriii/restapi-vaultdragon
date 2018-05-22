const express=require('express');
const logger=require('morgan');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://admin:123456@ds231360.mlab.com:31360/apiproject');

const app=express();

//routes
const users=require('./routes/users');

//middlewares
app.use(logger('dev'));
app.use(bodyParser.json());

//routes
app.use('/users',users);


//error handling
app.use((req,res,next)=>{
    const err= new Error('Not Found');
    err.status=404;
    next(err);
});

//error handler function
app.use((err,req,res,next)=>{
    const error=app.get('env')=== 'development' ? err:{};
    const status=err.status || 500;
    //respond to client
    res.status(status).json({
        error:{
            message: error.message
        }
    });
    //respond to ourselves
    console.log(err);
})

//server start
const port=app.get('port') || 3000;
app.listen(process.env.PORT || 3000);
//app.listen(port, ()=> console.log(`server is listening on port ${port}`));
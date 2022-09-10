//Initialize 
const express = require('express');
const mongoose = require('mongoose');
const dotEnv = require('dotenv');
const router = require('./routes/bookRoutes')
const methodoverride = require('method-override');


//Use the initalize technologies
dotEnv.config();
const app = express();
app.use(methodoverride('_method'));


//Server port
var port = 8080;

//view engine for ejs
app.set('views', 'views')
app.set('view engine', 'ejs')


//middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

// app.use((req, res, next)=>{
//     console.log("host", req.hostname);
//     console.log("path", req.path);
//     next();
// })

//router
app.use('/',router);
// connection to database
mongoose.connect(process.env.DB_CONN, ()=>{
    console.log('database connection is working')
    });

app.listen(port,()=>{
    console.log(`Connection to server is working. Port used ${port}`);
})
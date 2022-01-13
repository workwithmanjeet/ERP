const express = require('express');
const app = express();
// const path = require('path');
// const ejsmate = require('ejs-mate');
// const session = require('express-session');
// const flash = require('connect-flash');


// app.engine('ejs',ejsmate)
// app.use(express.urlencoded({extended: true}))
// app.set('view engine','ejs');
// app.set('views', path.join(__dirname,'views'))

// const methodOverride = require('method-override')
// app.use(methodOverride('_method'))
// app.use(express.static( path.join(__dirname,'public')))
// const passport = require('passport');
// const LocalStrategy =require('passport-local');

// const  usersRoutes =require('./routes/users')
// const  adminRoutes =require('./routes/adminpannel')
// const Students = require('./models/students')
// const User = require('./models/user')

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// mongoose.connect('mongodb://localhost:27017/erp',{
   
// });
// const db = mongoose.connection;
// db.on('error',console.error.bind(console,'Connection Error'));
// db.once('open',() =>{
//     console.log("Database Connected");
    
// })

// const sessionConfig = {
//     name: 'sessionabs',
//     secret: 'nvdfsvdsvvvvvvv',
//     resave: false,
//     saveUninitialized: true,
//     cookie:{
//         httpOnly:true,
//         // secure: true,
//         expires: Date.now()+ (1000*60*60*24*7 ),
//         maxAge: 1000 * 60 * 60  * 24 * 7
//     }
// }

// app.use(session(sessionConfig));
// app.use(flash());

// app.use(passport.initialize())
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// // define auth method of user 

// passport.serializeUser(User.serializeUser());  
// // add user detail in session
// passport.deserializeUser(User.deserializeUser());
// // remove user details from session

// app.use((req, res,next)=>{
//     res.locals.currentUser=req.user;
//     res.locals.success=req.flash('success');
//     res.locals.error=req.flash('error');
//     next();
// })




// app.use('/',adminRoutes)
// app.use('/',usersRoutes)
app.get('/',(req, res)=>{
    res.send("hii");
});
app.listen(3001,()=>{
    console.log("On port  3001")
})


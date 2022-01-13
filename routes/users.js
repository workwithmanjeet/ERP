const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const catchAsync =require('../utils/catchAsync')

router.get('/register', (req , res) =>{
    res.render('users/register');

})


router.get('/login',(req, res)=>{
    res.render('users/login');
})
router.post('/register',catchAsync( async (req , res, next) =>{


    try{
        const { username,email,userType,password}= req.body.user;
        // console.log(req.body)
        const user = new User({username : username ,userType:userType, email:email});
        const regUser = await User.register(user,password)
        // console.log(regUser)
        req.login(regUser , err =>{
            if(err) return next(err);
            req.flash('success','Welcome !!')
            res.redirect('/adminpannel')
        })
        
    }catch(e){
        // console.log(e)
        req.flash('error',e.message);
        res.redirect('/register')
    }

    
}))



router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), (req, res) => {
    // console.log(req.body);
    // console.log(req.user,"allok")
    req.flash('success', 'welcome back!');
    const redirectUrl = req.session.returnTo || '/adminpannel';
    delete req.session.returnTo;
    res.redirect(redirectUrl);
})

router.get('/logout',(req, res)=>{
    req.logout();
    req.flash('success', 'Goodbye!');
    res.redirect('/login');
})




module.exports = router;
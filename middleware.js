const Campground = require('./models/campground');

module.exports.isLoggedIn = (req, res, next)=>{
    if(!req.isAuthenticated()){
        req.session.returnTo = req.originalUrl;
        console.log(req.session)
        req.flash('error',"You must be signed in First!")
        return res.redirect('/login');
    }
    next();
}

m
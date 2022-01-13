const User = require('./models/user');

module.exports.isLoggedIn = (req, res, next)=>{
    if(!req.isAuthenticated()){
        req.session.returnTo = req.originalUrl;
        console.log(req.session)
        req.flash('error',"You must be signed in First!")
        return res.redirect('/login');
    }
    next();
}

module.exports.isAdmin = async (req, res, next)=>{
    const {id}= req.params;
    const cc= await User.findById(id);
    if(cc['userType']!="admin"){
        req.flash('error',"You do not have permission!!")
        return res.redirect(`/campground/${id}`)
    }
     next();
 }
const express = require('express');
const router = express.Router();
const {isLoggedIn,isAdmin} = require('../middleware');
const Students = require('../models/students')
const Counter = require('../models/counter')
const users = require('../models/user')

router.get('/adminpannel',isLoggedIn,isAdmin,(req,res)=>{
    // res.send("all ok")
    res.render('adminpannel/pannel.ejs')
})


router.get('/adminpannel/new',isLoggedIn,isAdmin,(req,res)=>{
    // res.send("all ok")
    res.render('adminpannel/new.ejs')
})

router.post('/adminpannel/new', isLoggedIn,isAdmin, async (req,res)=>{
    console.log(req.body);
    // res.send(req.body)
    var filter = req.body.filter
    const d=new Date()
    filter.age= d.getFullYear()-Number(filter.dob.slice(0,4))
    const cc =await Counter.findById('61dfbb43e73b8e3d181f9ce0')
    console.log(cc)
    filter.regno=cc["lastReg"]
    cc["lastReg"]+=1
    await cc.save();

    console.log(req.body);
    const student= new Students(filter)
    await student.save();
    console.log(student);
    res.redirect(`/adminpannel/s/${student._id}`)

})
router.get('/adminpannel/s/:id', isLoggedIn, isAdmin,async (req,res)=>{
    const {id}=req.params
    console.log(id)
    const student =await Students.findById(id)
    console.log(student)
    res.render('adminpannel/edit.ejs',{student})
})

router.delete('/adminpannel/s/:id', isLoggedIn,isAdmin,async (req,res) =>{
    const {id} = req.params;
    const ss = await Students.findByIdAndDelete(id)
    console.log(ss);
    req.flash('success',"Successfully  Deleted ! ")
    res.render('adminpannel/pannel.ejs')
 
})

router.patch('/adminpannel/s/:id', isLoggedIn,isAdmin,async (req,res) =>{
    const {id} = req.params;
    console.log(req.body);
    const camp = await Students.findByIdAndUpdate(id,req.body.ss)
    await camp.save();
    console.log(req.body);
    req.flash('success',"Successfully  updated  ! ")
    res.redirect(`/adminpannel/s/${camp._id}`)
    // res.send("okk")
 
})
router.post('/adminpannel/views', isLoggedIn,isAdmin,async (req,res)=>{
    let fil={}
    for (let i in req.body.filter){
        if (req.body.filter[i]){
           fil[i]=req.body.filter[i]
        }
    }
    console.log(fil);
    const students =await Students.find(fil)
    res.render('adminpannel/tables.ejs',{students})
  
})




module.exports = router;
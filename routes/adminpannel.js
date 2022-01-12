const express = require('express');
const router = express.Router();
const Students = require('../models/students')

router.get('/adminpannel',(req,res)=>{
    // res.send("all ok")
    res.render('adminpannel/pannel.ejs')
})


router.get('/adminpannel/new',(req,res)=>{
    // res.send("all ok")
    res.render('adminpannel/new.ejs')
})

router.post('/adminpannel/new', async (req,res)=>{
    console.log(req.body);
    // res.send(req.body)
    var filter = req.body.filter
    const d=new Date()
    filter.age= d.getFullYear()-Number(filter.dob.slice(0,4))
    filter.regno=1802
    res.locals.regno=res.locals.regno+1
 
    console.log(req.body);
    const student= new Students(filter)
    await student.save();
    console.log(student);
    res.send(student)

})
router.get('/adminpannel/s/:id', async (req,res)=>{
    const {id}=req.params
    console.log(id)
    const student =await Students.findById(id)
    console.log(student)
    res.render('adminpannel/edit.ejs',{student})
})

router.delete('/adminpannel/s/:id', async (req,res) =>{
    const {id} = req.params;
    const ss = await Students.findByIdAndDelete(id)
    console.log(ss);
    req.flash('success',"Successfully  Deleted ! ")
    res.render('adminpannel/pannel.ejs')
 
})

router.patch('/adminpannel/s/:id',async (req,res) =>{
    const {id} = req.params;
    console.log(req.body);
    const camp = await Students.findByIdAndUpdate(id,req.body.ss)
    await camp.save();
    console.log(req.body);
    req.flash('success',"Successfully  updated  ! ")
    res.redirect(`/adminpannel/s/${camp._id}`)
    // res.send("okk")
 
})
router.post('/adminpannel/views', async (req,res)=>{
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
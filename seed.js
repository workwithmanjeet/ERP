const mongoose = require('mongoose');
const Counter = require('./models/counter');

mongoose.connect('mongodb://localhost:27017/erp',{
   
});

const db = mongoose.connection;
db.on('error',console.error.bind(console,'Connection Error'));
db.once('open',() =>{
    console.log("Database Connected");
})



const seedDB = async () =>{
    await Counter.deleteMany({});

    const camp = new Counter({lastReg : 1804})
    await camp.save();
    console.log(camp)

    }


seedDB().then(()=>{
    mongoose.connection.close();
})
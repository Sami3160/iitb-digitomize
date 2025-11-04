const mongoose = require("mongoose");
require("dotenv").config();

async function dbConnect(){
    await mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        // useUnifiedTopology: true
    })
    .then(()=> console.log("Now you are connected to digitomize backend"))
    .catch((error)=>{
        console.log(error.message)
        process.exit(1);
    });
    
}

module.exports = dbConnect;

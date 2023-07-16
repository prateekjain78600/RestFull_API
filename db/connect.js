const mongoose=require('mongoose')


const connectDB=(url)=>{
    mongoose.set('strictQuery',true);
    mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>console.log('connected MongoDB'))
    .then((err)=>{console.log(err)})
}
module.exports=connectDB;
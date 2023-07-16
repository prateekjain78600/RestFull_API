const express=require("express")
const app=express();
const mongoose=require('./db/connect');
const api_product=require('./Router/product');
const connectDB = require("./db/connect");
const dotenv = require('dotenv').config();

app.get('/',(req,res)=>{
    res.send("hii ! server connected");
})

// middlleWare
app.use('/api/product',api_product);
// app.use('/api/product/testing',api_product);

const start=async()=>{
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(5000,()=>{
        console.log("server start at :http://localhost:5000");
    })
  } catch (error) {
    console.log(error);
  }
}
start();
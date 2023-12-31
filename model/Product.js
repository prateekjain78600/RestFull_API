const mongoose=require('mongoose');

const ProductSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:[true,"price must be required"]
    },
    featured:{
        type:Boolean,
        default:false,
    },
    rating:{
        type:Number,
        default:4.9
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    company:{
        type:String,
        enum:{
            values:["apple","microsoft","dell","mi"],
            message:`{values} is not supproted`
        }

    },
});

module.exports=mongoose.model("Product",ProductSchema);
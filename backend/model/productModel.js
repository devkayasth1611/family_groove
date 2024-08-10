const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema = new Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true,
        },
        price:{
            type:String,
            required:true,
            trim:true,
        },
        category:{
            type:String,
            required:true,
            trim:true,
        },
        userId:{
            type:String,
            required:true,
            trim:true,
        },
        company:{
            type:String,
            required:true,
            trim:true,
        },
        createdAt:{
            type : Date,
            default : Date.now,
        },
        updatedAt:{
            type : Date,
            default : Date.now,
        }
    },
    {
        timestamps:true,
    }
)
module.exports=mongoose.model("products",ProductSchema);
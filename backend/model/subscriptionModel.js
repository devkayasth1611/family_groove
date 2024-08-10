const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SubscriptionSchema = new Schema(
    {
        subName:{
            type:String,
            required:true,
            trim:true,
        },
        price:{
            type:String,
            required:true,
            trim:true,
        },
        type:{
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
module.exports=mongoose.model("subscriptions",SubscriptionSchema);
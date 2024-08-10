const express = require('express')
const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/family_groove")
    .then((success) => {
        console.log("Database is connected");
    })
    .catch((err) => {
        console.log(err); 
    });
app.listen(3000, (err,success) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("Server is running on port => " + 3000);
    }
})

const productRoutes = require("./routes/productRoutes");
app.use("/products", productRoutes);

const subscriptionRoutes = require("./routes/subscriptionRoutes");
app.use("/subscriptions", subscriptionRoutes);

const userRoutes = require("./routes/userRoutes");
app.use("/user", userRoutes);

const Login = require("./routes/loginRoutes");
app.use("/logins", Login);
const User = require("../model/userModel");

exports.login = async (req,res) => {
    console.log(req.body);
    if(req.body.password && req.body.email){
        let user = await User.findOne(req.body).select("-password");
        if(user)
        {
            res.json({
                message: "Login Successfull",
                status: 200,
                data: user,
            });
        }
        else
        {
            res.json({
                message: "Invalid Email or Password",
                status: 401,
            });
        }
    }
    else
    {
        res.json({
            message: "Invalid Email or Password",
            status: 401,
        });
    }
}
const userSchema = require("../model/userModel");

exports.addUser = (req,res) => {
    const user = new userSchema(req.body);
    user.save()
    .then((data) => {
        if(!data){
            res.json({
                message:"Something went wrong while adding the User.",
                status:400,
                error:err
            });
        }
        else{
            res.json({
                message:"User Added Successfully",
                status:200,
                data:data
            })
        }
    }).catch((err) => {
            res.json({
                message:"Something went wrong while adding the User.",
                status:400,
                error:err
            })
    })
}

exports.getAllUser = (req,res) => {
    userSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while fetching User.",
                status: 400,
                error: err,
            });
        }
        else
        {
            res.json({
                message: "User fetched Successfully",
                status: 200,
                data: data,
            });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while fetching User.",
                status: 400,
                error: err,
        });
    })
}

exports.getUserById = (req, res) => {
    // const proId = req.params.id;
    userSchema
      .findById(req.params.id)
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while fetching the User.",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "User fetched successfully.",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while fetching the User.",
          status: 400,
          error: err,
        });
      });
  };
  
  exports.updateUserById = (req, res) => {
    userSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the User.",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "User updated successfully",
            status: 200,
            data: data,
          });
        }
      }).catch((err) => {
        res.json({
            message: "Something went wrong while updating the All User",
            status: 400,
            error: err,
        })
      })
  };

    exports.deleteUserById = (req,res) => {
    const id = req.params.id;
    userSchema.findOneAndDelete(
      {
        _id : id,
      },
    )
    .then((data) => {
      if(!data){
        res.json({
          message: "Something went wrong while deleting the User.",
            status: 400,
            error: err,
        });
      }else{
        res.json({
          message: "User deleted Successfully",
            status: 200,
            data: data,
        });
      }
    }).catch((err) => {
      res.json({
        message: "Something went wrong while deleting the User",
            status: 400,
            error: err,
      })
    })
  }
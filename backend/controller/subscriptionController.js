const subscriptionSchema = require("../model/subscriptionModel");

exports.addSubscription = (req,res) => {
    const subscription = new subscriptionSchema(req.body);
    subscription.save()
    .then((data) => {
        if(!data){
            res.json({
                message:"Something went wrong while adding the Subscription",
                status:400,
                error:err
            });
        }
        else{
            res.json({
                message:"Subscription Added Successfully",
                status:200,
                data:data
            })
        }
    }).catch((err) => {
            res.json({
                message:"Something went wrong while adding the Subscription",
                status:400,
                error:err
            })
    })
}

exports.getAllSubscription = (req,res) => {
    subscriptionSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while fetching Subscription",
                status: 400,
                error: err,
            });
        }
        else
        {
            res.json({
                message: "Subscription fetched Successfully",
                status: 200,
                data: data,
            });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while fetching Subscription",
                status: 400,
                error: err,
        });
    })
}

exports.getSubscriptionById = (req, res) => {
    // const proId = req.params.id;
    subscriptionSchema
      .findById(req.params.id)
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while fetching the Subscription.",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Subscription fetched successfully.",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while fetching the Subscription.",
          status: 400,
          error: err,
        });
      });
  };
  
  exports.updateSubscriptionById = (req, res) => {
    subscriptionSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the Subscription.",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Subscription updated successfully",
            status: 200,
            data: data,
          });
        }
      }).catch((err) => {
        res.json({
            message: "Something went wrong while updating the All Subscription",
            status: 400,
            error: err,
        })
      })
  };

    exports.deleteSubscriptionById = (req,res) => {
    const id = req.params.id;
    console.log(id);
    subscriptionSchema.findOneAndDelete(
      {
        _id : id,
      },
    )
    .then((data) => {
      if(!data){
        res.json({
          message: "Something went wrong while deleting the Subscription.",
            status: 400,
            error: err,
        });
      }else{
        res.json({
          message: "Subscription deleted Successfully",
            status: 200,
            data: data,
        });
      }
    }).catch((err) => {
      res.json({
        message: "Something went wrong while deleting the Subscription",
            status: 400,
            error: err,
      })
    })
  }
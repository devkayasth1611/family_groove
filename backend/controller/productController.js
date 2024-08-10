const productSchema = require("../model/productModel");

exports.addProduct = (req,res) => {
    const product = new productSchema(req.body);
    product.save()
    .then((data) => {
        if(!data){
            res.json({
                message:"Something went wrong while adding the product",
                status:400,
                error:err
            });
        }
        else{
            res.json({
                message:"Product Added Successfully",
                status:200,
                data:data
            })
        }
    }).catch((err) => {
            res.json({
                message:"Something went wrong while adding the product",
                status:400,
                error:err
            })
    })
}

exports.getAllProduct = (req,res) => {
    productSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while fetching Product",
                status: 400,
                error: err,
            });
        }
        else
        {
            res.json({
                message: "Product fetched Successfully",
                status: 200,
                data: data,
            });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while fetching Product",
                status: 400,
                error: err,
        });
    })
}

exports.getProductById = (req, res) => {
    // const proId = req.params.id;
    productSchema
      .findById(req.params.id)
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while fetching the Product.",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Product fetched successfully.",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while fetching the Product.",
          status: 400,
          error: err,
        });
      });
  };
  
  exports.updateProductById = (req, res) => {
    productSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while updating the Product.",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Product updated successfully",
            status: 200,
            data: data,
          });
        }
      }).catch((err) => {
        res.json({
            message: "Something went wrong while updating the All Product",
            status: 400,
            error: err,
        })
      })
  };

    exports.deleteProductById = (req,res) => {
    const id = req.params.id;
    console.log(id);
    productSchema.findOneAndDelete(
      {
        _id : id,
      },
    )
    .then((data) => {
      if(!data){
        res.json({
          message: "Something went wrong while deleting the Product.",
            status: 400,
            error: err,
        });
      }else{
        res.json({
          message: "Product deleted Successfully",
            status: 200,
            data: data,
        });
      }
    }).catch((err) => {
      res.json({
        message: "Something went wrong while deleting the Product",
            status: 400,
            error: err,
      })
    })
  }
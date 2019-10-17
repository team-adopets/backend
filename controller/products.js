const Product = require("../models/products");

module.exports = {
  getAll: (req, res) => {    
    Product.find((error, result) => {
      if (error) {
        res.status(400).send({
          message: `failed to get product`,
          error
        });
      } else {
        res.status(200).send({
          message: `All products get`,
          result
        }); 
      }
    }).populate("pictures","link -_id");
  },
  getOne: (req, res) => {
    Product.findOne({ _id: req.params._id }, (error, result) => {
      if (error) {
        res.status(400).send({
          message: `can't find one`,
          error
        });
      } else {
        res.status(200).send({
          message: `we find it`,
          result
        });
      }
    }).populate("pictures", "link -_id");
  },
  addProduct: async (req, res) => {
    try {
      Product.create({
        name: req.body.name,
        ras: req.body.ras,
        gender:req.body.gender,
        age: req.body.age,
        description: req.body.description
      });
      
      res.status(200).send({
        message: "product is created",
        Product
      });
    } catch (error) {
      res.status(400).send({
        message: `failed to created`,
        error: error.message
      });
    }
  },
  updateProduct: (req, res) => {
    console.log(req.body)
    Product.findOneAndUpdate({ _id: req.params._id }, req.body, (error, result) => {
      if (error) {
        res.status(400).send({
          message: `product failed to update`,
          error
        });
      } else {
        res.status(200).send({
          message: `product update`,
          result
        });
      }
    });
  }
};


const Picture = require("../models/pictures");
const Product = require("../models/products");

module.exports = {
  addPicture: async (req, res) => {
    const picture = await Picture.create({
      link: req.body.link
    });
    const product = await Product.findOneAndUpdate(
      {
        _id: req.body._id
      },
      {
        $push: {
          pictures: picture._id
        }
      },
      {
        new: true
      }
    );
    try {
      res.status(200).send({
        massage: "Created new picture success",
        picture,
        product
      });
    } catch (error) {
      res.status(400).send({
        massage: `failed to created new picture`,
        error
      });
    }
  }
};

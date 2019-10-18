const nodemailer = require("nodemailer");
var sgTransport = require("nodemailer-sendgrid-transport");

let jwt = require("jsonwebtoken");


module.exports = {

  checkout: (req, res, next) => {
    let token = req.headers["x-access-token"] || req.headers["authorization"]; // Express headers are auto converted to lowercase
    if (token.startsWith("Bearer ")) {
      // Remove Bearer from string
      token = token.slice(7, token.length);
    }

    if (token) {
      jwt.verify(token, "secret", (err, decoded) => {
        if (err) {
          return res.json({
            success: false,
            message: "Token is not valid"
          });
        } else {
          req.decoded = decoded;
        }
      });
    } else {
      return res.json({
        success: false,
        message: "Auth token is not supplied"
      });
    }
    let dataDecoded = req.decoded;

    // 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
    var options = {
        auth: {
          api_user: process.env.SENDGRID_USERNAME,
          api_key: process.env.SENDGRID_PASSWORD
        }
      }

    var client = nodemailer.createTransport(sgTransport(options));


    // const transporter = nodemailer.createTransport(auth);

    /* 
            data field : age, date, description, gender, name, price, ras 
        */
    let name = "";
    let total = 0;
    for (let i = 0; i < req.body.length; i++) {
      name += req.body[i].name + " ";
      total += req.body[i].price;
    }

    const message = {
      from: "adopet.indo@gmail.com",
      to: dataDecoded.email,
      subject: "Jangan lupa di lunasin yah!!! :)",
      text: `Hai ${dataDecoded.name}`,
      html: `<h1>Hai ${dataDecoded.name}</h1>
                <h3>Anjing yang dibeli : ${name}</h3>
                <h3>Total yang harus di bayar: ${total}</h3>
            `
    };

    client.sendMail(message, (err, data) => {
      if (err) {
        res.status(500).send({
          message: "Can not send email"
        });
        // console.log(err);
      } else {
        res.status(200).send({
          message: "Email was succesfuly send"
        });
        // console.log(data);
      }
    });
  }
};

// transporter.use(
//     "compile",
//     hbs({
//         viewEngine: "express-handler",
//         viewPath: "../view/"
//     })
// );
// const mailOptions = {
//     from: "motulojanto@gmail.com",
//     to: email,
//     subject,
//     text,
//     attachments: [],
//     templates: "emailTemplate"
// };

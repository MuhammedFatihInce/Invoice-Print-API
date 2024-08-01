const nodemailer = require("nodemailer");
const config = require("../config");

var tranporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    secureConnection: false,
    port: 587,
    tls: {
        ciphers: 'SSLv3'
    },
    auth: {
        user: config.email.username,
        pass: config.email.password
    }
});

tranporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });


module.exports = tranporter;
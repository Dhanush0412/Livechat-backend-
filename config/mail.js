let nodemailer =
require("nodemailer");
let transporter = nodemailer.createTransport({
    service:"gmail",

    auth:{
        user:process.env.EMAIL,
        pass:process.env.APP_PASSWORD
    }

});

module.exports =transporter;
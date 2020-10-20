const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const nodemailer = require("nodemailer");
app.use(express.json());

app.use(cors());

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "projectpragma20@gmail.com",
    pass: "Qwerty123!",
  },
});

app.post("/send", (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  var mail = {
    from: "projectpragma20@gmail.com",
    to: email,
    subject: "Hey Your Pragma File hash",
    html: `<p>Hey! ${name} sent your secure file hash. Below is the IPFS File hash which you can use to get your files</p>
            <br/>
            <h3>${message}</h3>
            <hr/>
            <p>Note: Use the hash in the Pragma website in Receive section to download your file</p>`,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.status(400).json({
        message: "failed",
      });
    } else {
      res.status(200).json({
        message: "success",
      });
    }
  });
});

app.listen(port, () => {
  console.log("Server started on", port);
});

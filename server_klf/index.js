"use strict";
const express = require("express");
const app = express();
const mysql = require("mysql");
app.use(express.json());

//------------connecting to mysql database---------------//

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "testdb",
});

//ASSESSMENT 1

//NODEMAILER for Form
const creds = require("./config");

const transport = {
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("server can take messages");
  }
});
express()
  .use(function (req, res, next) {
    res.header(
      //avoid cors problems... hopefully
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Origin", "*");
    next();
  })

  //Nodemailer allows you to recieve mail from clients easily, with Gmail, Yahoo and other. As long as you send a proper post back to the Server...
  .post("/api/contact", async (req, res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const text = req.body.text;
    const mail = {
      from: email,
      to: creds.USER,
      subject: fname,
      text: `name: ${fname} ${lname} \n email: ${email} \n message: ${text}`,
    };
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: "null",
        });
      } else {
        res.json({
          status: "success",
        });
      }
    });
    res.send(subject);
    console.log("here");
  });

//assessment 3 SQL

// SELECT u.name AS 'user_name', a.name AS 'activity_name', COUNT(*) AS 'amount', MIN(occurrence) AS 'first_occurrence', MAX(occurrence) AS 'last_occurrence'
// FROM user AS u, activity AS a, user_activity AS ua
// WHERE u.id = ua.user_id
//     AND a.id = ua.activity_id
// GROUP BY u.id, a.id
// ORDER BY a.id;

app.listen(3000, () => {
  console.log("server on 3000");
});

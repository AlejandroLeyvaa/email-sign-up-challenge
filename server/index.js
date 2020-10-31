const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const { config } = require('./config/index');

const app = express();

app.use(express.json());
app.use(cors());

console.log(config.password)

app.get('/user-email', (req, res, next) => {
  const body = req.body;
  console.log(body);
  res.send({"Hello": "World"})
});

app.post('/user-email', (req, res, next) => {
  const { username } = req.body;
  const emailService = username.split('@')[1];
  console.log(username);
  console.log(emailService);

  const transporter = nodemailer.createTransport({
    service: 'gmail.com',
    auth: {
      user: config.user,
      pass: config.password
    }
  });

  const mailOptions = {
    from: 'a.leyvaa95@gmail.com',
    to: username,
    subject: 'Sending email using Node Js',
    text: 'That was very funny'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });

  res.send({"Hello": username});
});

app.listen(config.port, () => {
  console.log(`Server on http://localhost:${config.port}`);
});
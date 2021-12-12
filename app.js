require('dotenv').config();
let nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

const message = {
  from: "Nodemailer Node.js",
  to: "solodzh@gmail.com",
  subject: "Message from Node.js",
  text: "Тренируюсь отправлять письма с Gmail с помощью Node.js",
  html: `<p>Тренируюсь отправлять письма с Gmail с помощью Node.js</p>
  <p><strong>Html</strong></p>`,
};
  

const sendMessage = async () => {
  try {
    const data = await transporter.sendMail(message);
    console.log(data.response);
    console.log('Сообщение успешно отправлено');
  } catch (error) {
    console.log("Ошибка");
    console.log(error.response);
  }
};

sendMessage();
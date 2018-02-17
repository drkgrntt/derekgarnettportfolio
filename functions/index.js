const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
let transporter = 
nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);

exports.sendContactMessage = 
functions.database.ref('/messages/{uri}').onCreate(event => {
  const snapshot = event.data;

  const message = snapshot.val();

  let mailOptions = {
    to: 'drkgrntt@gmail.com',
    subject: 'New Work Inquiry',
    html: `<p>From: ${message.name}, ${message.email}</p><p>${message.content}</p>`
  };

  return transporter.sendMail(mailOptions).then(() => {
    return console.log('Mail sent to: drkgrntt@gmail.com')
  });
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

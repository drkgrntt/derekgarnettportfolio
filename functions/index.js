const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const stripePublishableKey = functions.config().stripe.publishable_key;
const stripeSecretKey = functions.config().stripe.secret_key;
const stripe = require('stripe')(stripeSecretKey);

// Mailer
let transporter = 
nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);

exports.sendContactMessage = 
functions.database.ref('/messages/{uri}').onCreate((snap, context) => {
  const message = snap.val();

  let mailOptions = {
    to: 'drkgrntt@gmail.com',
    subject: 'New Work Inquiry',
    html: `<p>From: ${message.name}</p><p>Email: ${message.email}</p><p>${message.content}</p>`
  };

  return transporter.sendMail(mailOptions).then(() => {
    return console.log('Mail sent to: drkgrntt@gmail.com')
  });
});

// PAYMENTS WITH STRIPE
exports.handlePayment = functions.database.ref('/donations/{uri}').onCreate((snap, context) => {
  const { token, amount } = snap.val();
  
  return stripe.charges.create({
    amount: amount,
    currency: 'usd',
    description: 'donation',
    source: token.id
  }, (err, charge) => {
    console.log(err, charge);
  });
});

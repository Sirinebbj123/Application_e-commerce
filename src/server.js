const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.json());

app.post('/sendConfirmationEmail', (req, res) => {
  const { email } = req.body;

  const transporter = nodemailer.createTransport({
    // Configuration du transporteur d'email (SMTP, Gmail, etc.)
    service: 'gmail',
    auth: {
      user: 'sirinebbj123@gmail.com',
      pass: 'omyrouhy123@@@',
    },
  });

  const mailOptions = {
    from: 'votre_adresse_email@gmail.com',
    to: email,
    subject: 'Confirmation de commande',
    text: 'Votre commande a été confirmée. Merci pour votre achat !',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Erreur lors de l\'envoi de l\'email de confirmation.');
    } else {
      console.log('Email de confirmation envoyé: ' + info.response);
      res.status(200).send('Email de confirmation envoyé avec succès.');
    }
  });
});

app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});

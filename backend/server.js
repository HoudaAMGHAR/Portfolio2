const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Route pour envoyer les emails
app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Validation simple (à améliorer avec Zod/Yup comme demandé)
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ msg: 'Veuillez remplir tous les champs.' });
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
        },
    });

    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: process.env.RECIPIENT_EMAIL,
        subject: `Nouveau message de contact: ${subject}`,
        html: `
            <h3>Nouveau message depuis votre portfolio</h3>
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Sujet:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Une erreur est survenue lors de l\'envoi de l\'email.' });
        }
        res.status(200).json({ msg: 'Email envoyé avec succès !' });
    });
});

app.listen(port, () => {
    console.log(`Le serveur est lancé sur le port ${port}`);
});
const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465, //gmail
    secure: true,//gmail
    auth: {
        user: 'email@gmail.com',
        pass: '',
    }

})

transport.sendMail({
    from: '',
    to: '', // Email que receberam
    subject: 'Email enviado com Nodemailer',
    html: '<h1>Bom dia</h1> <p>Este email foi enviado utilizando Nodemailer.</p>',
    text: 'Bom dia, Este email foi enviado utilizando Nodemailer.',
})
.then((response) => console.log('Email enviado com sucesso.'))
.catch((err) => console.log(err))

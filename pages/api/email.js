const nodemailer = require('nodemailer')
const config = require('../../js/config.local')

export default function sendEmail(req, res) {
  let transporter = nodemailer.createTransport ({
    host: 'br410.hostgator.com.br',
    port: 587,
    auth: {
      user: config.USERMAIL,
      pass: config.PASSMAIL
    }
  })

  transporter.sendMail({
    from: `"ARTEM CARDIOLOGIA SITE" <${config.USERMAIL}>`, 
    to: config.USERMAIL,
    replyTo: req.body.email,
    subject: "CONTATO ATRAVÉS DO SITE",
    text: req.body.message, 
    html: `<b>${req.body.name}</b><br />${req.body.telefone}<br />${req.body.message}` 
  }).then((response) => { res.send(response)} )
  .catch((error) => { res.send(error)})
}
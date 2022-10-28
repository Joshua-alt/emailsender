const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
let transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
	secure: false, // true for 465, false for other ports
    auth: {
		user: "mbavazijoshua@gmail.com",
		pass: "joshua@1998.com"
    }
});
router.get('/', (req, res) => {
  res.json(['ths', 'joshua']);
});

//send mail
router.post('/', (req, res) => {
		console.log('sending email..');
		res.json(['ths', 'joshua']);
		const message = {
	    from: `${req.body.sender}`, // Sender address
	    to: `${req.body.reciever}`,         // recipients
	    subject: `${req.body.title}`, // Subject line
	    text:  `${req.body.message} ` ,// Plain text body
		html:  `${req.body.messageHtml} ` // html body
	};
	console.log('service')
	console.log('joshua email seder', message)
	transport.sendMail(message, function(err, info) {
	    if (err) {
	      console.log(err)
	    } else {
	      console.log('mail has sent.');
	      console.log(info);
	    }
	});
});
module.exports = router;

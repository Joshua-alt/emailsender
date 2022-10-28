const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
let transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
		user: "5bf5e4fba17b39",
		pass: "694d19a64db0e8"
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
	    text:  ` message: ${req.body.message} ` // Plain text body
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

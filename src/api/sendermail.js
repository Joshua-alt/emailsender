const express = require('express');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const router = express.Router();
let transport = nodemailer.createTransport(smtpTransport({
	service: 'gmail',
	host: 'smtp.gmail.com',
	auth: {
		user: "mbavazijoshua@gmail.com",
		pass: "nmbmwcfppdowtlks"
	}
  }));
router.get('/', (req, res) => {
  res.json(['ths', 'joshua']);
});

//send mail
router.post('/', (req, res) => {
	    try {
          
			
			const message = {
				from: `${req.body.sender}`, // Sender address
				to: `${req.body.reciever}`,         // recipients
				subject: `${req.body.title}`, // Subject line
				text:  `${req.body.message} ` ,// Plain text body
				html:  `${req.body.messageHtml} ` // html body
			};
			
			transport.sendMail(message, function(err, info) {
				if (err) {
				console.log(err)
				res.status(500).json({ message: "Something went wrong" });
				} else {
				console.log('mail has sent.');
				res.status(200).json({ message: "mail has sent." });
				
				}
			});
		}
		catch (error) {
			res.status(500).json({ message: "Something went wrong" });
			
			console.log(error);
		  }
		
});
module.exports = router;

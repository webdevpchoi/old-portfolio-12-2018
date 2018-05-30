const 	express = require('express'),
		bodyParser = require('body-parser'),
		nodeMailer = require('nodemailer');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

console.log(process.env.NM_USER);
console.log(process.env.NM_PASS);



app.get('/', (req, res) => res.render('index'));

app.post('/contact-me', (req, res) => {

	const output = `
		<h1>You have a new message from your portfolio!</h1>
		<li>Name: ${req.body.name}</li>
		<li>Name: ${req.body.email}</li>
		<br>
		<p>Message: ${req.body.message}</p>
	`
	
	let transporter = nodeMailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
	          user: process.env.NM_USER,
	          pass: process.env.NM_PASS
      	}
    });

    let mailOptions = {
      from: 'webdevpchoi@gmail.com', // sender address
      to: 'pchoi13370@gmail.com', // list of receivers
      subject: req.body.subject, // Subject line
      text: req.body.message, // plain text body
      html: output // html bodyParser
	};

	transporter.sendMail(mailOptions, function (err, info) {
	   if(err)
	     console.log(err)
	   else
	     console.log('mail sent!');
	});


});

app.listen(port, () => console.log('Server is running!'));
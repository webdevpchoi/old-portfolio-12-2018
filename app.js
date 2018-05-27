const 	express = require('express'),
		bodyParser = require('body-parser'),
		nodeMailer = require('nodemailer');

const app = express();
const port = 3000;

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => res.render('index'));

app.post('/contact-me', (req, res) => {
	let transporter = nodeMailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
	          user: 'email',
	          pass: 'password'
      	}
    });

    let mailOptions = {
      from: 'from-email', // sender address
      to: ['to-email'], // list of receivers
      subject: req.body.subject, // Subject line
      text: req.body.message, // plain text body
      html: '<b>This email actually worked!</b>' // html bodyParser
	};
});

app.listen(port, () => console.log('Server is running!'));
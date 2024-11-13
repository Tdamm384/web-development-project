const express = require('express'); 

const app = express(); 

const nodemailer = require('nodemailer');

const port = 8080; 

 

app.use(express.urlencoded({ extended: true })); // for parsing application 

 

app.get('/', (req, res) => { 

    res.sendFile(__dirname + '/index.html'); // sending HTML file on get request 

}); 

 

app.post('/submit-form', (req, res) => { 

    const username = req.body.username; // accessing name data 

    const email = req.body.email; //accessing email data 

    console.log(username + " " + email); //sending/saving of name & email in terminal  

    res.send (`Thank you ${username}! I hope we get in touch soon!`); //message to user showing information was stored  

}); 

//making transporter to send email
const transporter = nodemailer.createTransport({
service: 'smtp.gmail.com',
auth: {
    user: 'tdamm101@gmail.com',
    pass: ''

}
});
 
//sending form data to email
transporter.sendMail(email, username)

app.listen(port, () => { 

    console.log(`Server running on port http://localhost:8080`); 

}); 
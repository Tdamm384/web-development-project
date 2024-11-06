const express = require('express'); 

const app = express(); 

const port = 3000; 

 

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

 

app.listen(port, () => { 

    console.log(`Server running on http://localhost:${port}`); 

}); 
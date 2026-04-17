 const express = require('express');
const app = express();

app.use(express.static('public/'));
app.use(express.urlencoded({ extended: true }));

let url=require('url')

app.set('view engine', 'ejs');

// Show form page
app.get('/', (req, res) => {
    res.render('signup');
});

 // form handling using get method
 app.get('/saveform', (req, res) => {
 
     // fetch data from url
     let result = url.parse(req.url, true)
     // console.log(result)
 
     // only query
     console.log(result.query)
     // res.send("User Register Successsfully...")
 
     // data traversing
 
     res.render('signup.ejs', { data: result.query })
 })

const HOST = '127.0.0.1';
const PORT = 2000;

app.listen(PORT, HOST, () => {
    console.log(`Server is up on http://${HOST}:${PORT}`);
});
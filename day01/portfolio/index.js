 const express = require('express');
const app = express();

// Static files
app.use(express.static('public/'));

 
app.set('view engine', 'ejs');

 //Home Page
app.get('/', (req, res) => {
    const user = {
        id: 1111,
        name: 'Harshal',
        Email_Id: 'bankheleharshal@gmail.com'
    };

    res.render('Home', { data: user});
}); 

// About route
app.get('/about', (req, res) => {
    res.render('about');  
});

// Projects route
app.get('/projects', (req, res) => {
    res.render('Project'); 
});

// Contact route
app.get('/contact', (req, res) => {
    const user = {
        name: 'Harshal'
    };

    res.render('Contact', { data: user });
});

// fallback routing
app.use((req, res) => {
    res.send("Page not Found-404");
});

const HOST = '127.0.0.1';
const PORT = 1000;

app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
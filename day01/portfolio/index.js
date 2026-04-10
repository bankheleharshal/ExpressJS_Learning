const express=require('express')
const app=express()

// Home route
app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>My Portfolio</title>
           <style>
                body {
                    margin: 0;
                    font-family: Arial;
                    background-color: #AEB784;
                    color: white;
                    text-align: center;
                }

                nav {
                    background-color: #020617;
                    padding: 15px;
                }

                nav a {
                    color: #280905;
                    margin: 15px;
                    text-decoration: none;
                    font-size: 18px;
                    font-weight: bold;
                }

                nav a:hover {
                    color: yellow;
                }

                h1 {
                    margin-top: 40px;
                    color: #280905;
                       font-weight: 900;
                }
            </style>
          
            </head>
        <body>
            <h1><center>Welcome to My Portfolio<center> </h1>
            <p><center>I am Harshal - MERN Stack Developer<center></p>

            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
        </body>
        </html>
    `)
})


// About route
app.get('/about', (req, res) => {
    res.send(`
        <h1>About Me</h1>
        <p>I am learning Full Stack Development (MERN).</p>
        <a href="/">Back</a>
    `)
})

// Projects route
app.get('/projects', (req, res) => {
    res.send(`
        <h1>My Projects</h1>
        <ul>
            <li>Node.js App</li>
            <li>React App</li>
        </ul>
        <a href="/">Back</a>
    `)
})

// Contact route
app.get('/contact', (req, res) => {
    res.send(`
        <h1>Contact Me</h1>
        <p>Email: bankheleharshal@gmail.com</p>
        <a href="/">Back</a>
    `)
})

const HOST='127.0.0.1';
const PORT=1000;

app.listen(PORT,HOST,()=>{
    console.log(`Server is running on http://${HOST}:${PORT}`)
})
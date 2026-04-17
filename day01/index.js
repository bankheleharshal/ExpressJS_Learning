const express=require('express')
const app=express()

//routing in express

app.get('/',(req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    res.write("<h1>Welcome to Express JS Server</h1>")
    res.end()

})

//about
app.get('/about',(req,res)=>{
    res.send("<h1>About Us Page<h1>")
})

const PORT=1000;
const HOST='127.0.1.1'

app.listen(PORT,HOST,()=>{
    console.log(`Server is running on http://${HOST}:${PORT}`)
})
const express = require('express')
const path = require('path')
const http = require('http')

const app = express()

const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))


app.get('/chat', (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen(port, ()=>{
    console.log("server is up on port", port)
})
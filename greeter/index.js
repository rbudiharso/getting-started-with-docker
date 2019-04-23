const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("Welcome! I'm running on docker container")
})

app.get('/hello', (req, res) => {
    const name = req.query.name || 'anonymous'
    res.send(`Hello ${name}, how are you?`)
})

app.listen(3000, () => {
    console.log('Server started, go to http://127.0.0.1:3000')
})
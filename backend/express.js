const express = require("express")
const app = express()
app.get('/', (req, res) => {
    res.send("Welcome to Express js")
})

app.get("/demo", (req, res) => {
    res.status(200).json({"message": "Data arriving soon......"})
})

app.post('/demo', (req, res) => {
    res.status(200).send('Demo page post method')
})

app.listen(7900, () => {
    console.log('server running at port: 7900')
})
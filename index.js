const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send(complexFunction("Hello ", "From Express"))
})

function complexFunction(a,b){
    return a+b
}

module.exports = complexFunction

app.listen(3000)

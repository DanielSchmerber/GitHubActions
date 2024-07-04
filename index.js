const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send(complexFunction("Hello ", "from Express!"))
})


//Insecure Endpoint, njsscan will detect this as a vulnerability
app.get('/insecure', function (req, res) {
    //XSS payload could be executed here
    res.send("You searched for "+req.query["search"])
})

function complexFunction(a,b){
    return a+b
}

module.exports = complexFunction

app.listen(process.env.PORT || 3000)

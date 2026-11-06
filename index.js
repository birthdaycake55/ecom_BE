const express = require('express')
const app = express()

app.use(express.json())
//app.use(express.static('dist')) dont have dist yet

function unknownEndpoint(request,response){
    response.status(404).send({error: 'unknown endpoint'})
}

//basic start
app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})


//port

const PORT = 3000||process.env.PORT
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
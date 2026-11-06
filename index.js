//will be using postgresql
//will track products, users, user carts(?), sales
import { Client } from 'pg'
const client = await new Client().connect()

//const { DatabaseSync} = require('node:...')
//const db = new DatabaseSync('app.db')

const express = require('express')
const app = express()

const res = await client.query('SELECT $1::text as message', ['Hello World!'])
console.log(res.rows[0].message)
await client.end()

app.use(express.json())
//app.use(express.static('dist')) dont have dist yet

function unknownEndpoint(request,response){
    response.status(404).send({error: 'unknown endpoint'})
}

//port

const PORT = 3000||process.env.PORT
app.listen(PORT)
console.log(`Server running on port ${PORT}`)

export default sql
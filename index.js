const express = require("express")
const {graphqlHTTP} = require("express-graphql")

const schema = require('./schema/schema');

const app = express()
const PORT = 5000

app.get('/',(req,res)=>[
    res.send("Welcome to GraphQL")
])

app.use('/graphql',graphqlHTTP ({
    schema,
    graphiql:true
}))

app.listen(PORT,()=>{
    console.log("Server running on port 3000")
})
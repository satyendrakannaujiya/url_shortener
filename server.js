const express = require('express');
const {db} = require('./model/db');
const app = express();


app.get('/',(req,res)=>{
    let user = req.query.name;
    if(!user) user="World"
     res.send(`Hello ${user} `);
})

db.authenticate().then(()=>{
    console.log("db works");
}).catch((err)=>{
    console.log(err);
})
app.listen(4445,()=>{
    console.log("Server started on http://localhost:4445");
})
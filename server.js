const express = require('express');
const {db} = require('./model/db');
const linksRoute = require('./routes/links');
const app = express();


app.use(express.json());

app.get('/',(req,res)=>{
    
     res.send(`Application is Working fine :) `);
})

app.use('/api/links',linksRoute);



app.listen(4445,()=>{
    console.log("Server started on http://localhost:4445");
})
const { Router } = require('express');

const route= Router();


/*
POST /api/linkk to create short code
*/

route.post("/",(req,res)=>{

})

/*
GET to get url by using short code
*/
route.get('/:code',(req,res)=>{
    res.send("find is fast");
})



module.exports=route;

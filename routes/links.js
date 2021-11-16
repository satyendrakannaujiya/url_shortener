const { Router } = require('express');

const route= Router();

route.get('/',(req,res)=>{
    res.send("find is fast");
})

module.exports=route;

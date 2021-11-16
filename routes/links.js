const { Router } = require('express');
const {createRandomShortCode,createCustomShortCode,findLongUrl} = require("../services/url-service");

const route= Router();


/*
POST /api/linkk to create short code
*/

route.post("/",async (req,res)=>{

    
    const link=req.query.link;
    const code = req.query.code;


    if(!code){
        try{
            const url = await createRandomShortCode(link);
            return res.json(url);
        }catch(e){
            console.log(e);
        }
     
    }

    try{
        const url = await createCustomShortCode(code,link);
        return res.json(url);
    }catch(err){
            return res.status(400).json({error:e.message});
    }

})

/*
GET to get url by using short code
*/
route.get('/:code',async (req,res)=>{
    const code = req.params.code;
    const url=await findLongUrl(code);
    if(url){
        return res.json(url);
    }else{
        return res.status(404).json({error:"No such shortcode available"});
    }
})



module.exports=route;

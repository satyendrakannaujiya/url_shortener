const {URLs} = require('../model/db');
const {int2radix64,radix64toint }  = require('../services/radix64-service');

async function createRandomShortCode(link){
   
    const getCode = (Math.random()*999999999);

    
        const exists = await URLs.findOne({
            where:{
                id:getCode
            }
        })
    
        if(exists){
              return await createRandomShortCode(link); 
        }

  

        return await URLs.create({
            id:getCode,
            code:int2radix64(getCode),
            link:link
       })

   

    

   


}

async function createCustomShortCode(code,link){

        const id = radix64toint(code);
        const exists = await URLs.findOne({
            where:{
                id:id
            }
        })
        if(exists){
             throw new Error("This shortcode [ "+code +" ] already exists")
        }
        return await URLs.create({
            id:id,
            code:code,
            link:link
        })
}

async function findLongUrl(code){
     const id=radix64toint(code);
    try{
        const res =  await URLs.findOne({
            where:{
                id:id
            }
       })
       return res;
    }catch(err){
        console.log(err);
    }
    
}


module.exports={
    createRandomShortCode,
    createCustomShortCode,
    findLongUrl
}
const {URLS} = require('../model/db');
const {int2radix64,radix64toint }  = require('../services/radix64-service');

async function createRandomShortCode(links){
    const getCode = (Math.random()*9999999999)
    const exists = await URLS.findOne({
        where:{
            id:genCode
        }
    })

    if(exists){

          return await createRandomShortCode(links); 
    }

    return await URLS.create({
         id:getCode,
         code:int2radix64(getCode),
         link:links
    })


}

async function createCustomShortCode(code,links){
        const id = radix64toint(code);
        const exists = await URLS.findOne({
            where:{
                id:id
            }
        })
        if(exists){
             throw new Error("This shortcode [ "+code +" ] already exists")
        }
        return await URLS.create({
            id:id,
            code:code,
            link:links
        })
}

async function findLongUrl(code){
     const id=radix64toint(code);
     return await URLS.findOne({
          where:{
              id:id
          }
     })
}


module.exports={
    createRandomShortCode,
    createCustomShortCode
}
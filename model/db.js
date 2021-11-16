const { Sequelize, DataTypes } = require('sequelize');


const db = new Sequelize({
  dialect: 'mysql',
  database: 'url',
  username:'newsbyte'
});

const URLs = db.define('urls',{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    code:{
        type:DataTypes.STRING(7),
        unique:true
    },
     link:{
        
        type:DataTypes.TEXT,
        allowNull:false
    }
})


module.exports={
    db
} 

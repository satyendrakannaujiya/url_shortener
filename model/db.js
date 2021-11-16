const { Sequelize } = require('sequelize');


const db = new Sequelize({
  dialect: 'mysql',
  database: 'url',
  username:'newsbyte'
});


module.exports={
    db
} 

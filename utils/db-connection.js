

const {Sequelize} = require('sequelize');
  

  const sequelize = new Sequelize('bus_booking_app','root','987654',{

    host:'localhost',
    dialect:'mysql'
  });

  (async()=>{
 
     try{

         await sequelize.authenticate();
         console.log("Connection to the database has been created");
     }
     catch(err){
         
        console.log(err);
     }
      
  })();

  module.exports=sequelize;
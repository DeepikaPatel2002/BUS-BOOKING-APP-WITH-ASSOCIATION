
const {Sequelize,DataTypes} =require("sequelize");

const sequelize = require('../utils/db-connection');
const { type } = require("node:os");

const Booking = sequelize.define('Booking',{

    id:{
        type:DataTypes.INTEGER,
         autoIncrement:true,
         primaryKey:true
    },

   seatNumber:{
      type:DataTypes.INTEGER,
      allowNull:false
   }
});
 
module.exports=Booking;
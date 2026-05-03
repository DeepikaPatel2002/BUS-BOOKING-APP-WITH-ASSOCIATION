

const User = require('./user');
const Bus=require('./bus');
const Booking=require('./booking');

//one to many USER & BOOKING
 User.hasMany(Booking)
 Booking.belongsTo(User);

 //one to many BUS & BOOKING
  Bus.hasMany(Booking);
  Booking.belongsTo(Bus);

  module.exports={

     
     User,
     Bus,
     Booking
  }
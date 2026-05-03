
const Booking = require('../models/booking');
 const User = require('../models/user');
 const Bus = require('../models/bus');

 exports.createBooking=async (req,res)=>{

     try{
    const {userId, busId,seatNumber} = req.body;

       const newBooking = await Booking.create({
          userId, busId,seatNumber
       });
       res.status(201).json(newBooking);
     }
     catch(error){
        res.status(500).json({'error':error.message});
     }
 }

  exports.getUserBookings = async (req,res)=>{

      try{

         const bookings = await Booking.findAll({

             where:{
                userId:req.params.id
             },
             include:[{model:Bus, attributes:['busNumber']}],
             raw:false
         })
         res.status(200).json(bookings)
      }
      catch(error){
        res.status(500).json({'error':error.message})
      }
  }

  exports.getBusBookings = async (req,res)=>{

      try{
    
         const bookings = await Booking.findAll({
            where:{
                busId:req.params.id
            },
            include:[{model:User,attributes:['name,email']}],
            raw:false
         })
          res.status(200).json(bookings)
      }
      catch(error){
        res.status(500).json({'error':error.message})
      }
  }




const Bus = require('../models/bus');

exports.createBus=async(req,res)=>{

    try{

        const {busNumber,totalSeats,availableSeats}=req.body;
        const newBus= await Bus.create({

            busNumber,
            totalSeats,
            availableSeats
        });
        res.status(201).json(newBus);
    }
    catch(err){
        res.status(500).send({'error':err.message});
    }
}

exports.getAllBuses = async (req, res) => {
    try {
        const buses = await Bus.findAll();
        res.status(200).json(buses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
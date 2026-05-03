

const express= require('express');
const db = require('./utils/db-connection');


const busRoutes= require('./routes/busRoutes');
const userRoutes = require('./routes/userRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const bookingController = require('./controller/bookingController');

require('./models');

const app = express();

app.use(express.json());

  app.use('/users',userRoutes);
  app.use('/buses',busRoutes);
  app.use('/bookings',bookingRoutes);

  app.get('/users/:id/bookings',bookingController.getUserBookings);
  app.get('/buses/:id/bookings',bookingController.getBusBookings);



db.sync({force:false})
.then(()=>{

    console.log('Database is connected and tables created')

    app.listen(5000,()=>{ 
        console.log('Server is running');
    })
})
.catch(err=> console.log('Sync error:', err))
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const  db = require('../db-connection');
const connection = db();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM Bookings ORDER BY date, time', (err, results) => {
    if(err) {
      return res.send(err)
    }
    else {
      return res.send(results)
    }
  });
});

router.post('/create', function(req, res){
  const name = req.body.name;
  const email = req.body.email;
  const street = req.body.street_address;
  const city = req.body.city;
  const state = req.body.state;
  const zip = req.body.zip_code;
  const bookingType = req.body.type;
  const date = req.body.date;
  const time = req.body.time;
  const INSERT_QUERY = `INSERT INTO Bookings (name,email,street_address,city,state,zip_code,type,date,time) VALUES ('${name}','${email}','${street}','${city}','${state}','${zip}','${bookingType}','${date}','${time}')`;

  connection.query(INSERT_QUERY, (err,results) => {
    if(err) {
      return res.end(err)  
    }
    else{
      return res.send('successfully added booking')
    } 
  })
});

module.exports = router;


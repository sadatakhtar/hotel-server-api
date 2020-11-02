
const express = require("express");
const app = express();
const cors = require('cors');


//middleware
app.use(express.json());
app.use(cors());

//create temp database for hotel
let bookings = [
    {
        "id": 0,
        "roomId": 123,
        "title": "Mr",
        "firstName": "John",
        "surname": "Doe",
        "email": "johndoe@yahoo.com",
        "checkInDate": "2020-11-21",
        "checkOutDate": "2020-11-23"

    },
    {
        "id": 1,
        "roomId": 223,
        "title": "Miss",
        "firstName": "Jenny",
        "surname": "saunders",
        "email": "jenny123@yahoo.com",
        "checkInDate": "2020-11-11",
        "checkOutDate": "2020-11-23"

    },
    {
        "id": 2,
        "roomId": 12,
        "title": "Mr",
        "firstName": "Andrew",
        "surname": "De barnes",
        "email": "andy321@yahoo.com",
        "checkInDate": "2020-11-15",
        "checkOutDate": "2020-11-18"

    },
]

//Routes
app.get('/',(req, res) => {
    res.send('Welcome to Hotel-booking-API');
});

app.get('/bookings', (req, res) => {
    res.json(bookings);
});

app.post('/bookings', (req, res) => {
    let newPost = req.body;
    //Object.keys(newPost).length === 0 && res.json({success: false});
    newPost ? (bookings.push(newPost),res.json(bookings)) : res.sendStatus(404);
    
});

app.get('/bookings/:id', (req, res) => {
    let {id} = req.params;
    let filteredBooking = bookings.find(e => e.id == id);
    filteredBooking ? res.json(filteredBooking) : res.sendStatus(404);

});

app.delete("/bookings/:id", (req, res) => {
    const {id} = req.params;
    id > bookings.length || !id ? res.send(404) : (bookings = bookings.filter(e => e.id != id), res.json(bookings));
});
// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

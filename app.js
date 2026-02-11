//importing framework
import express from 'express';
const app  = express();

const PORT = 3500;

app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));

const appointments =[];

//defining main route
app.get('/', (req,res) => {
res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.get('/', (req,res) => {
res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});

//admin route to view all appointments
app.get('/admin', (req, res) => {
    res.send(appointments);
});


// submit appointment route
app.post('/submit', (req,res) => {
    //create JSON object to store order data 
    const details = {
    fname: req.body.fname,
    lname: req.body.lname,
    date: req.body.date,
    time: req.body.time,
    timestamp: new Date()
    };

    // add order
    appointments.push(details)

    // res.send(orders);
    res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
    
});

app.listen(PORT, () => {
    console.log(`Server is running on at http://localhost:${PORT}`);
});
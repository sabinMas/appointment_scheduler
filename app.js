//importing framework
import express from 'express';

const PORT = 3500;

app.use(expressstatic('public'));

app.use(express.urlencoded({extended: true}));

const orders =[];

app.get(`/` , (req, res) => {
    res.sendFile('home.html');
});

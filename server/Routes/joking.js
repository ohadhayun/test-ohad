require('../data/database');

const express = require('express');
const jokesModel = require('../Models/jokes');
const router = express.Router();


router.get('/', (req, res) => {
    jokesModel.find({}, (err, documents) => {
        err? res.status(500).send('error') : res.status(200).send(documents);
    })
});

router.get('/GiveMeTwo', (req, res) => {
    jokesModel.find({}, (err, documents) => {
        let num1 = Math.floor(Math.random() * documents.length);
        let num2 = Math.floor(Math.random() * documents.length);
        const filternum1 = documents.filter((elem) => elem.id==num1 || elem.id==num2);
        if(err){
            res.status(500).send('error');
        }
        else{
            res.status(200).send(filternum1);
        }
    })
});


router.post('/add', (req, res) => {
    console.log(req.body);
    const dish = new jokesModel(req.body);
    dish.save().then(() => res.send("success"));
});


module.exports = router;
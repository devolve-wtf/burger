const express = require('express');
const burger = require('../models/burger.js');
const router = express.Router();

router.get('/', function(req, res) {
    burger.selectAll(function(data) {
        let object = {
            burgers: data
        };
        //Log for testing
        console.log(object);
        res.render('index', object);
    });
});

router.post('/', function(req, res) {
    burger.insertOne([
        'burger_name', 'devoured'
    ], [
        req.body.burger_name, req.body.devoured
    ], function() {
        res.redirect('/');
    });
});

router.put('/:id', function(req, res) {
    let condition = 'id = ' + req.params.id;

    //Log for testing
    console.log('condition', condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function() {
        res.redirect('/');
    });
});

router.delete('/:id', function(req, res) {

    let condition = 'id = ' + req.params.id;

    burger.deleteOne(condition, function() {
        res.redirect('/');
    });


});

module.exports = router;
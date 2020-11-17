// const express = require('express');
// const router = express.Router();

const router = require('express').Router();

router.get('/animals', (req, res) => {
    const animals = ['Bunny', 'Kitty', 'Pupper']
    res.render('faves/favAnimals', {title: "fav animals", animals});
});

router.get('/foods', (req, res) => {
    const foods = ['watermelon', 'peaches']
    res.render('faves/favFoods', {title: "fav foods", foods});
});


module.exports = router;
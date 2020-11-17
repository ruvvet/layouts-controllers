// const express = require('express');
// const router = express.Router();

const router = require('express').Router();



router.get('/animals', (req, res) => {
    const animals = ['Mosquitoes', 'stuff']
    res.render('hates/hateAnimals', {title: "hate ani", animals});
});

router.get('/foods', (req, res) => {
    const foods = ['anything', 'that', 'is', 'weird']
    res.render('hates/hateFoods', {title: "hate foods", foods});
});

module.exports = router;
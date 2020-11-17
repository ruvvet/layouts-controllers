//invoke express
const express = require('express');

// create an instance
const app = express();
// set ejs engine
app.set('view engine', 'ejs');

const expressEjsLayouts = require('express-ejs-layouts');

// set up ejs layouts
app.use(expressEjsLayouts);


// create routes
app.get('/', (req, res) => {
    res.render('index');
});



// app.use ( '/parentpath', require('the location of controller))
// then only needs to search the immediate folder for file base name
app.use('/faves', require('./controllers/faves'));
app.use('/hates', require('./controllers/hates'));

// listen on this port
app.listen(8000, () => {});


//steps
// require/set up
// create app
// set engine
// routes
// listen
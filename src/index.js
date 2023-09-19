const path = require('path');
const express = require('express');


const morgan = require('morgan');
const handlebars = require('express-handlebars');
const  methodOverride = require('method-override')

const route= require('./routes');

const db= require('./config/db');
//connect to db
db.connect();

const app = express();


const hbs = handlebars.create({ 
  extname: '.hbs',
  helpers: {
    sum: (a,b) =>a+b,
  }
 });
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
// Http logger
app.use(morgan('combined'));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
// Template engine
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resource', 'views'));



//Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

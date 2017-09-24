const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

app.listen(port);
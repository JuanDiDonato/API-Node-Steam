//Express
const express = require('express');
const app = express();
//Morgan
const morgan = require('morgan');
//Cookies
const CookieParser = require('cookie-parser');

//Settings
app.set('port', 5000);
app.use(morgan('dev'));
app.use(express.json())
app.use(CookieParser())

//User Routes
app.use(require('./Routes/SteamRoutes'),require('./Routes/UserRoutes'))

app.listen(app.get('port'), ()=>{
    console.log('[+] Running server at port '+ app.get('port'));
})

//Router
const {Router} = require('express')
const app = Router()
//Controllers
const {auth, authenticate} = require('../Controllers/SteamControllers')

//Steam Routes
app.get("/auth/steam", auth)
app.get("/auth/steam/authenticate", authenticate) 

module.exports=app

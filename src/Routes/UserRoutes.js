//Express Router
const {Router} = require('express')
const UserRoutes = Router()
const {GetFriends, GetPlayerInfo, GetAchievements,GetOwnedGames,GetStats} = require('../Controllers/UserControllers')

UserRoutes.get('/friends', GetFriends)

UserRoutes.get('/perfil', GetPlayerInfo)

UserRoutes.get('/juegos', GetOwnedGames)

UserRoutes.get('/logros', GetAchievements)

UserRoutes.get('/stats', GetStats)

module.exports=UserRoutes
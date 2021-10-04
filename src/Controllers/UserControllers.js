//Steam Web Api
const SteamApi = require('web-api-steam');
//Axios
const axios = require('axios')

const UserControllers = {}
const steam = require('../Helpers/keys')
const SteamControllers = require('./SteamControllers')


UserControllers.GetFriends = (req,res) => {
    const key = steam.apiKey
    const id = SteamControllers.UserSteamId
    console.log(key);
    console.log(id);
    if(id.length > 0){
        SteamApi.getFriendList(id, key, (err, data) => {
            if(data){
                res.json(data)
            }
            if(err){
                res.json(err)
            }
        })
    }else{
        res.json({'messages':{'message':'Error', 'error': true}})
    }

}
UserControllers.GetPlayerInfo = (req,res) => {
    const key = steam.apiKey
    const id = SteamControllers.UserSteamId
    console.log(key);
    console.log(id);
    if(id.length > 0){
        SteamApi.getPlayerInfo(id, key, (err, data) => {
            if(data){
                res.json(data)
            }
            if(err){
                res.json(err)
            }
        })
    }else{
        res.json({'messages':{'message':'Error', 'error': true}})
    }
    
}
UserControllers.GetOwnedGames = (req,res) => {
    const key = steam.apiKey;
    const id = SteamControllers.UserSteamId;
    console.log(key);
    console.log(id);
    if(id.length > 0){
        SteamApi.getOwnedGames(id, key, (err, data) => {
            if(data){
                res.json(data)
            }
            if(err){
                res.json(err)
            }
        })}else{
            res.json({'messages':{'message':'Error', 'error': true}})
        }
}

UserControllers.GetAchievements = (req,res) => {
    appid = '730' //id of Counter Strike: GO
    SteamApi.getGAchievements(appid, (err, data) => {
    if(data){
        res.json(data)
    }
    if(err){
        res.json(err)
    }
})}

UserControllers.GetStats = async(req,res) => {
    const key = steam.apiKey;
    const id = SteamControllers.UserSteamId;
    const {data :{playerstats : {stats}}} = await axios.get('http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key='+key+'&steamid='+id, {validateStatus:false})
    console.log(stats);
    res.json('volvio')
}


    

module.exports=UserControllers
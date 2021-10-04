const SteamControllers = {}
//Steam
const steam = require('../Helpers/keys')

SteamControllers.auth =async (req,res) => {
    const redirectUrl = await steam.getRedirectUrl();
    return res.redirect(redirectUrl);
}

SteamControllers.authenticate =async (req,res) => {
    const user = await steam.authenticate(req);
    const id = user.steamid
    SteamControllers.UserSteamId = id
    res.json('Logued!')

}

module.exports=SteamControllers
//Steam
const SteamAuth = require("node-steam-openid");
//Steam settings
const steam = new SteamAuth({
    realm: "http://localhost:5000", // Site name displayed to users on logon
    returnUrl: "http://localhost:5000/auth/steam/authenticate", // Your return route
    apiKey: "A87ACF8BA631EB4AAAFF3C12BD81A496" // Steam API key
});

module.exports=steam
const discordBot = require('./discordBot.js');
const token = process.env.DISCORD_TOKEN || require('./config/config.js').token;
if (token == "") {
    throw new Error("Bot Token was not Specified");
}
discordBot.login(token);

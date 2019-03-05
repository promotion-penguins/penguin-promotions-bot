const config = require('./config');
global = {
  serverID:"516387175299022868",
  alertChannelID: "551877337247907859",
  usersWaiting:[],
  staffConversations: [],
  presence: {
    game: {
      //GAME NAME
      name: process.env.DISCORD_PRES_NAME || config.presence.game.name,
      //TWITCH URL
      url:  process.env.DISCORD_PRES_URL || config.presence.game.url,
      //ACTIVITY TYPE: "PLAYING", "STREAMING", "LISTENING", "WATCHING"
      type:  process.env.DISCORD_PRES_TYPE || config.presence.game.type
    },
    //STATUS: 'online','idle','invisible','dnd'
    status:  process.env.DISCORD_PRES_STATUS || config.presence.status,
    afk: false
  }
}

const Commando = require("discord.js-commando");
const FeatureLoader = require("./features/FeatureLoader.js");
const path = require('path');

const client = new Commando.Client({
  /* ###########################
   *  OWNER ID MOVED TO TOKEN.JS
   * ########################### */
  owner: process.env.DISCORD_OWNERID || require('./config/config.js').ownerId,
  commandPrefix: "!pp",
  unknownCommandResponse: false
});
global.featureLoader = new FeatureLoader(client);

client.registry
    // Registers your custom command groups
    .registerGroups([
        ['groupname', 'Group Name'],
        ['staffcommands', 'Staff Commands']
    ])

    // Registers all built-in groups, commands, and argument types
    .registerDefaults()

    // Registers all of your commands in the ./commands/ directory
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
  /* #################################
   *  PRESENCE SETUP MOVED TO TOKEN.JS
   * ################################# */
  var presence = require('./config/config.js').presence;
  if (presence) {
    client.user.setPresence(require('./config/config.js').presence);
  }
  console.log(`Logged in as ${client.user.tag}!`);
  global.featureLoader.Intitialise();
});

client.on('message', message => {
  if (message.author==client.user||message.author.bot) {
    return;
  }
  global.featureLoader.Message(message)
});

client.on('guildMemberUpdate',(oldMember,newMember) => {
  global.featureLoader.GuildMemberUpdate(oldMember,newMember);
});

client.on("guildMemberAdd",member =>{
  global.featureLoader.GuildMemberAdd(member);
});

client.on("guildMemberAvailable",member => {
  global.featureLoader.GuildMemberAvailable(member);
});

client.on("guildMemberRemove",member => {
  global.featureLoader.GuildMemberRemove(member);
});

client.on("guildMemberSpeaking",(member,speaking) => {
  global.featureLoader.GuildMemberSpeaking(member,speaking)
});

client.on("voiceStateUpdate",(oldMember,newMember)=>{
  global.featureLoader.VoiceStateUpdate(oldMember,newMember);
})

module.exports = client;

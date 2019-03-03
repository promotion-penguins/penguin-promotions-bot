require("../config/global.js");
const Feature = require('../baseClasses/feature.js');

class StaffChat extends Feature {
  constructor(client) {
    super(client);
  }
  Intitialise(){

  }

  Message(message){
    if (message.channel.type == "dm") {
      message.reply("Please wait while we find you somone to talk to...");
      var alertChannel = this.GetChannel(global.alertChannelID);

      var message = {
        embed: {
      author: {
        name: message.author.username,
        icon_url: message.author.avatarURL
      },
      title: message.author + "would like to speak to someone do `!pp accept` to accept.",
      description: "This is a test embed to showcase what they look like and what they can do.",
      fields: [{
          name: "message",
          value: "They can have different fields with small headlines."
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: ""
      }
    };

      alertChannel.send();
    }
  }

  GuildMemberUpdate(oldMember,newMember){

  }

  GuildMemberAdd(member) {

  }

  GuildMemberAvailable(member) {

  }

  GuildMemberRemove(member) {

  }

  GuildMemberSpeaking(member,speaking) {

  }
}

module.exports = StaffChat;

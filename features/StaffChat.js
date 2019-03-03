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
      message.reply("yay");
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

class Feature {
  constructor(client) {
    this.client = client;
  }

  Intitialise(){}
  Message(message){}
  GuildMemberUpdate(oldMember,newMember){}
  GuildMemberAdd(member) {}
  GuildMemberAvailable(member) {}
  GuildMemberRemove(member) {}
  GuildMemberSpeaking(member,speaking) {}
  VoiceStateUpdate(oldMember,newMember) {}

  GetGuild() {
    return this.client.guilds.get(global.serverID);
  }
  GetChannel(id){
    return this.GetGuild().channels.get(id);
  }

  GetRole(name) {
    return this.GetGuild().roles.find(r=>r.name == name);
  }
  GetRole(name) {
    return this.GetGuild().members.find(r=>r.name == name);
  }
}

module.exports = Feature;

/*

require("../config/global.js");
const Feature = require('../baseClasses/feature.js');

class FeatureName extends Feature {
  constructor(client) {
    super(client);
  }
  Intitialise(){

  }

  Message(message){

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

module.exports = FeatureName;


*/

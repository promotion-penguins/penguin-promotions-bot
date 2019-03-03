require("../config/global.js");
const Feature = require('../baseClasses/feature.js');
const StaffChat = require('./StaffChat.js');

class FeatureLoader extends Feature {
  constructor(client) {
    super(client);
    this.features = [];
  }

  _LoadFeatures() {
    var staffChat = new StaffChat(this.client);
    this.features.push(staffChat);
  }

  _ForEachFeature(callback=feature=>{}){
    this.features.forEach(feature=>{
      callback(feature);
    });
  }

  Intitialise() {
    this._LoadFeatures();

    this._ForEachFeature(feature=>{
      feature.Intitialise();
    });
  }

  Message(message) {
    this._ForEachFeature(feature=>{
      feature.Message(message);
    });
  }

  GuildMemberUpdate(oldMember,newMember){
    this._ForEachFeature(feature=>{
      feature.GuildMemberUpdate(oldMember,newMember);
    });
  }

  GuildMemberAdd(member) {
    this._ForEachFeature(feature=>{
      feature.GuildMemberAdd(member);
    });
  }

  GuildMemberAvailable(member) {
    this._ForEachFeature(feature=>{
      feature.GuildMemberAvailable(member);
    });
  }

  GuildMemberRemove(member) {
    this._ForEachFeature(feature=>{
      feature.GuildMemberRemove(member);
    });
  }
  GuildMemberSpeaking(member,speaking){
    this._ForEachFeature(feature=>{
      feature.GuildMemberSpeaking(member,speaking);
    });
  }

  VoiceStateUpdate(oldMember,newMember) {
    this._ForEachFeature(feature=>{
      feature.VoiceStateUpdate(oldMember,newMember);
    });
  }
  Playing() {
    this._ForEachFeature(feature=>{
      feature.Playing();
    });
  }
  Collecting() {
    this._ForEachFeature(feature=>{
      feature.Collecting();
    });
  }
}

module.exports = FeatureLoader;

require("../config/global.js");
const Feature = require('../baseClasses/feature.js');

class StaffChat extends Feature {
    constructor(client) {
        super(client);
    }
    Intitialise() {

    }

    Request(message, text) {
      var alertChannel = this.GetChannel(global.alertChannelID);
      alertChannel.send({
          embed: {
              author: {
                  name: message.author.username,
                  icon_url: message.author.avatarURL
              },
              title: "",
              description: message.content,
              fields: [{
                  name: text,
                  value: message.author + " would like to speak to someone do `!pp answer @" + message.author.username + "` to answer."
              }],
              timestamp: new Date(),
              footer: {
                  icon_url: this.client.user.avatarURL,
                  text: "PromotionPenguins"
              }
          }
      });
    }

    StaffDM(message) {
      return {
          embed: {
              author: {
                  name: message.author.username,
                  icon_url: message.author.avatarURL
              },
              description: message.content,
              timestamp: new Date(),
              footer: {
                  icon_url: this.client.user.avatarURL,
                  text: "PromotionPenguins"
              }
          }
      }
    }

    GetConversationByStaffId(staffId,cb) {
      global.staffConversations.forEach((conv)=> {
        if (conv.staff==staffId) {
          cb(conv);
        }
      });
    }
    GetConversationByUserId(userId ,cb) {
      global.staffConversations.forEach((conv)=> {
        if (conv.user==userId) {
          cb(conv);
        }
      });
    }

    Message(message) {
        if (message.channel.type == "dm") {
          if (global.staffConversations.map(x=>x.user).includes(message.author.id)) {
            GetConversationByStaffId(message.author.id,function (conv) {
              
            });
          }

          if (global.staffConversations.map(x=>x.user).includes(message.author.id)) {
            GetConversationByUserId(message.author.id,function (conv) {

            });
          }

          if (global.usersWaiting.includes(message.author.id)) {
            message.reply("Be patient somone will get to you but i will send out an urgent request for you");
            this.Request(message,"This user seems to be really impatient. THIS MUST BE URGENT OR SOMETHING");
            return;
          }

            message.reply("Please wait while we find you somone to talk to...");
            global.usersWaiting.push(message.author.id);


          this.Request(message,"A user would like to contact a staff member");


        }
    }

    GuildMemberUpdate(oldMember, newMember) {

    }

    GuildMemberAdd(member) {

    }

    GuildMemberAvailable(member) {

    }

    GuildMemberRemove(member) {

    }

    GuildMemberSpeaking(member, speaking) {

    }
}

module.exports = StaffChat;

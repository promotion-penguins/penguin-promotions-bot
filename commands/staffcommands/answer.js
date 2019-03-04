const {
    Command
} = require("discord.js-commando");

class AnswerCommand extends Command {
    constructor(client) {
        super(client, {
            name: "answer",
            group: "staffcommands",
            memberName: "answer",
            description: "Answers User Request",
            examples: ['answer <@1>'],
            args: [{
                key: 'user',
                prompt: '**Please state the name of the user you are answering to**',
                type: 'user',
                error: 'There was an error when reciving the specified user (it could be todo with the specified user not being a user)'
            }]
        });
    }

    run(message,{user}) {
      var staff = message.author;
      message.reply("test success```User recived:" + user.username +  "```");
      if (!global.usersWaiting.includes(user.id)) {
        message.reply("This user has not requested any support.")
        return;
      }

      message.reply("Creating Covesation Message (not finished yet)");
      global.usersWaiting = global.usersWaiting.filter(function(value, index, arr){
          return value !== user.id;
      });
      var conversation = {user:user.id,staff:staff.id};
      global.staffConversations.push(conversation);
      staff.send("Connected to user. `` command to leave comming soon.");
      user.send(`Hello! My name is ${staff} How may I help you?`);

    }
}

module.exports = AnswerCommand;

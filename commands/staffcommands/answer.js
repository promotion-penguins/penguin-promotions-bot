const {Command} = require("discord.js-commando");

class AnswerCommand extends Command {
    constructor(client) {
        super(client,{
            name:"answer",
            group: "staffcommands",
            memberName: "answer",
            description: "Answers User Request",
            examples: ['answer <@1>']
        });
    }

    run(message) {
        message.reply("this command doesnt do anthing yet.");
    }
}

module.exports = AnswerCommand;

const {Command} = require("discord.js-commando");

class HelloCommand extends Command {
    constructor(client) {
        super(client,{
            name:"hello",
            group: "groupname",
            memberName: "hello",
            description: "Says Hello",
            examples: ['hello']
        });
    }

    run(message) {
        message.reply("Hello");
    }
}

module.exports = HelloCommand;
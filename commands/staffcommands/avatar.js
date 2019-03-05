const {
    Command
} = require("discord.js-commando");

class AvatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: "avatar",
            group: "staffcommands",
            memberName: "avatar",
            description: "Change Avatar",
            examples: ['avatar']
        });
    }

    run(message) {
      var image = message.attachments.first().url;
      if ((image||"")=="") {
        message.reply("No Image was provided");
      }
      message.client.user.setAvatar(image);

    }
}

module.exports = AvatarCommand;

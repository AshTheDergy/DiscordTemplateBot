const { CommandInteraction } = require("discord.js");
const Bot = require("../../handlers/client");

module.exports = {
    name: "ping",
    description: `Pong!`,
    cooldown: 1,
    type: "CHAT",
    install: "BOTH",

    /**
    * @param {Bot} client
    * @param {CommandInteraction} interaction
    */
    run: async (client, interaction) => {
        interaction.followUp({content: `test`})
    }
}
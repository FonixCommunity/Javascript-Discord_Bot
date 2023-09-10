const { REST, Routes, Client, GatewayIntentBits, SlashCommandBuilder } = require('discord.js');
const CommandType = require('./System/Class_Cmd'); // Remplacez le chemin

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.MessageContent,
  ],
});

const st = require('./System/Class_Info');
const cm = require('./SystemBot/Content_js/cmd.js');

const cmd = new cm()
const set = new st()
const slc = new CommandType()

console.clear()
console.log(cmd.W_U(), '\n');

client.on('ready', () => {
  console.log(`${cmd.B_r()} Logged in as ${client.user.tag}${cmd.CR()}`);
});

const AppId = set.inf_guild.app_;
const SerID = set.inf_guild.srv_;

const cmp = {
  name: slc.CommandPing.name,
  description: slc.CommandPing.description,
};
const cms = {
  name: slc.CommandSay.name,
  description: slc.CommandSay.description,
  options: [
    {
      name: 'message',
      type: 3,
      description: 'The message to say',
      required: true,
    },
  ],
};


const rest = new REST({ version: '10' }).setToken(set.inf_runer);

(async () => {
  try {
    console.log(`\n${cmd.B_r()} Started refreshing application (/) commands. ${cmd.CR()}\n`);

    await rest.put(Routes.applicationGuildCommands(AppId, SerID), {
      body: [cms, cmp],
    });

    console.log(`${cmd.New()} Successfully reloaded application (/) commands. ${cmd.CR()}\n`);
  } catch (error) {
    console.error(`${cmd.ERE()}${error}${cmd.CR()}\n`);
  }
})();
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === slc.CommandPing.name) {
    await interaction.reply('Pong!');
  } else if (commandName === slc.CommandSay.name) {
    const message = interaction.options.getString('message');
    await interaction.reply(`Tu as dit : "${message}"`);
  }
});

client.login(set.inf_runer);

// Importation I
const { REST, Routes, Client, GatewayIntentBits, SlashCommandBuilder } = require('discord.js');
const CommandType = require('./System/Class_Cmd'); 
// Creat Your Discord Bot
// -- Set Intents To Your Bot 'client'
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.MessageContent,
  ],
});

// Importation II
const st = require('./System/Class_Info'); // Get Bot Information
const cm = require('./SystemBot/Content_js/cmd.js'); // Juste For Fun And Decoration For Console 


// Call Class 'This is important for using {st} and {cm} and {Commands information}
const cmd = new cm()
const set = new st()
const slc = new CommandType()

// Starting
console.clear()
console.log(cmd.W_U(), '\n');

//Client Ready
client.on('ready', () => {
  console.log(`${cmd.B_r()} Logged in as ${client.user.tag}${cmd.CR()}`);
});

// Information For [Server ID] and [Bot ID] 'This is important for REST and Slash Command
const AppId = set.inf_guild.app_;
const SerID = set.inf_guild.srv_;

// Preparing Commands
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


// Using |REST|
const rest = new REST({ version: '10' }).setToken(set.inf_runer);


// Slash Commands Prepating 'This is important'

/** 
 * 
 * REST is important for creating your application command 'slash'
 * The REST module in Discord.js facilitates communication with the 
 * Discord API by handling HTTP requests and responses, 
 * allowing developers to interact with Discord's services 
 * programmatically.
 * 
**/

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

// Using Your Slash Commads
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === slc.CommandPing.name) {
    await interaction.reply('Pong!');
  } else if (commandName === slc.CommandSay.name) {
    const message = interaction.options.getString('message');
    await interaction.reply(`You said : "${message}"`);
  }
});

/**
 * 
 * 'set.inf_runer'  is
 * Your Discord Bot Token
 * You Can Get Thim From 
 * "https://discord.com/developers/applications/#Your_Aplication_Id#/bot"
 * 
**/

// Login Your Discord Bot 
client.login(set.inf_runer);

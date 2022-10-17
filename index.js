var http = require('http');
var https = require('https');
var cors = require('cors');
const path = require('path');

var privateKey  = process.env.privateKey;
var certificate = process.env.certificate;

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8000);
httpsServer.listen(8443);

app.use(express.static(path.resolve(__dirname, './front/build')));

app.use(cors({
    origin: '*'
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './front/build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


const { Client, GatewayIntentBits, Partials } = require('discord.js');

const client = new Client({
	intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions],
    partials: [Partials.Message, Partials.Channel, Partials.Reaction],
});

client.once('ready', () => {
	console.log('Bot is Ready!');
});

client.on('messageReactionAdd', async (reaction, user) => {
    // When a reaction is received, check if the structure is partial
    const x = [
        ["🌵", 0],
        ["🤢", 1],
        ["😷", 2,] ["🧀", 3], 
        ["😭", 4]
    ];
	if (reaction.partial) {
		// If the message this reaction belongs to was removed, the fetching might result in an API error which should be handled
		try {
			await reaction.fetch();
		} catch (error) {
			console.error('Something went wrong when fetching the message:', error);
			// Return as `reaction.message.author` may be undefined/null
			return;
    }
  }
  try {
  user.addRole(
    client.guilds.fetch(992805236508999760).then(guild => guild.roles.find(
      role => role.name ===  ("STEP " + (x.filter(e => e[0] === reaction.emoji.name)[1] + 19))
      ))
    );
  } catch (error) {
    console.error("Something went wrong with addRole:",error);
    return;
  }
});

client.login(process.env.TOKEN);
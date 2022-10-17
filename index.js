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


const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
	intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions],
    partials: [Partials.Message, Partials.Channel, Partials.Reaction],
});

client.once('ready', () => {
	console.log('Bot is Ready!');
});

client.on('messageReactionAdd', async (reaction, user) => {
    // When a reaction is received, check if the structure is partial
    const x = new Map([
        ["🌵", 0],
        ["🤢", 1],
        ["😷", 2,] ["🧀", 3], 
        ["😭", 4]
    ]);
	if (reaction.partial) {
		// If the message this reaction belongs to was removed, the fetching might result in an API error which should be handled
		try {
			await reaction.fetch();
		} catch (error) {
			console.error('Something went wrong when fetching the message:', error);
			// Return as `reaction.message.author` may be undefined/null
			return;
        }
        
        user.roles.addRole(
          client.channels.get(992805236508999760).guild.roles.find(
            role => role.name ===  ("STEP " + (x.get(reaction.emoji.name) + 19))
            )
          );
	}

	// Now the message has been cached and is fully available
	console.log(`${reaction.message.author}'s message "${reaction.message.content}" gained a reaction!`);
	// The reaction is now also fully available and the properties will be reflected accurately:
	console.log(`${reaction.count} user(s) have given the same reaction to this message!`);
});

client.login(process.env.TOKEN);
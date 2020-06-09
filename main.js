const Discord = require("discord.js");
const client = new Discord.Client();
const PREFIX = "";
const fs = require("fs");

//*****************---NEW DISCORD COLLECTION---*****************//
client.commands = new Discord.Collection();

//*****************---GET CODE FROM THE COMMANDS FOLDER(just a cleaner way of having your commands)---*****************//
const commandFiles = fs.readdirSync("./commands/").filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

//*****************---WHEN THE BOT IS ONLINE, OUTPUT THIS TEXT.---*****************//
client.once("ready", () => {
  console.log("STATUS: ONLINE");
  client.user.setActivity("The Matrix", { type: "WATCHING" });
});

//*****************---GREET A NEW MEMBER.---*****************//
client.once("guildMemberAdd", (member) => {
  const channel = member.guild.channels.find((channel) => channel.name === "general-chat");
  if (!channel) return;

  channel.send(`Welcome to The Matrix ${member}`);
});

// //--- GETS THE COMMANDS FROM A FOLDER CALLED COMMANDS ---//
// client.on("message", (message) => {
//   if (!message.content.startsWith(PREFIX)) return;
//   let args = message.content.substring(PREFIX.length).split(" ");
//   switch (args[0]) {
//     case "help":
//       client.command.get("help").execute(message, args);
//       break;
//   }
// });

//*****************---BOT REPLIES---*****************//
client.on("message", (message) => {
  let args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case "Yo":
    case "yo":
    case "hi":
    case "Hi":
    case "Hey":
    case "hey":
    case "hello":
    case "Hello":
      message.reply("whats up").then(message.react("🪂"));
      break;
  }

  //*****************---!help COMMAND---*****************//
  switch (args[0]) {
    case "!help":
      message.channel.send("I reply to the following commands: ");
      message.channel.send("'flomaster'");
      message.channel.send("'Flomaster'");
      message.channel.send("'quality'");
      message.channel.send("'Quality'");
      message.channel.send("'hacker'");
      message.channel.send("'Mark'");
      message.channel.send("'mark'");
      message.channel.send("'stfu'");
      message.channel.send("'wyd'");
      message.channel.send("'hey'");
      message.channel.send("'Hey'");
      message.channel.send("'hi'");
      message.channel.send("'Hi'");
      message.channel.send("'Yo'");
      message.channel.send("'yo'");
      message.channel.send("'hello'");
      message.channel.send("'Hello'");
      break;
  }
  //*****************---BOT REPLIES "Yes?" WHEN THESE WORDS ARE MENTIONED IN CHAT---*****************//
  switch (args[0]) {
    case "mark?":
    case "Mark":
    case "mark":
      message.channel.send("Yes?");
      break;
  }
  //*****************---BOT REPLIES WHEN wyd IS MENTIONED IN CHAT---*****************//
  switch (args[0]) {
    case "wyd":
      message.channel.send("I'm just enjoying the Matrix, you?").then(message.react("💭"));
      break;
  }
  //*****************---BOT REPLIES WHEN stfu IS MENTIONED IN CHAT---*****************//
  switch (args[0]) {
    case "stfu":
      message.channel.send("What did you say to me?!").then(message.react("😡"));
      message.react("😤");
      message.react("😠");
      message.react("👺");
      message.react("🗯️");
      break;
  }
  //*****************---BOT REPLIES WHEN quality IS MENTIONED IN CHAT---*****************//
  switch (args[0]) {
    case "quality":
      message.channel
        .send("https://media.giphy.com/media/10zxDv7Hv5RF9C/giphy.gif")
        .then(message.react("🎫"));
      break;
  }
  //*****************---BOT REPLIES WHEN Quality IS MENTIONED IN CHAT---*****************//
  switch (args[0]) {
    case "Quality":
      message.channel
        .send("https://media.giphy.com/media/MC6eSuC3yypCU/giphy.gif")
        .then(message.react("🦩"));
      break;
  }
  //*****************---BOT REPLIES WHEN flomaster IS MENTIONED IN CHAT---*****************//
  switch (args[0]) {
    case "flomaster":
      message.channel
        .send("https://media.giphy.com/media/QsggDWcGSb4gg4PJDq/giphy.gif")
        .then(message.react("🎫"));
      break;
  }
  //*****************---BOT REPLIES WHEN Flomaster IS MENTIONED IN CHAT---*****************//
  switch (args[0]) {
    case "Flomaster":
      message.channel
        .send("https://media.giphy.com/media/fV0oSDsZ4UgdW/giphy.gif")
        .then(message.react("🪐"));
      break;
  }
  //*****************---BOT REPLIES WHEN ok mark IS MENTIONED IN CHAT---*****************//
  switch (args[0]) {
    case "ok mark":
      message.channel
        .send("https://media.giphy.com/media/fV0oSDsZ4UgdW/giphy.gif")
        .then(message.react("🪐"));
      break;
  }
  //*****************---BOT REPLIES WHEN hacker IS MENTIONED IN CHAT---*****************//
  switch (args[0]) {
    case "hacker":
      message.channel
        .send("https://media.giphy.com/media/sULKEgDMX8LcI/giphy.gif")
        .then(message.react("🪐"));
      break;
  }
});

//*****************---LOGIN TO DISCORD W/ HEROKO---*****************//
client.login(process.env.token);

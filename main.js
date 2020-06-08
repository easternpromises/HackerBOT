const Discord = require("discord.js");
const client = new Discord.Client();
// const token = "NzE5MzQxNDkwMjk1NDA2NjUy.Xt2Bog.HqaBE5I9rUJJZ3Gl5pObGsO8M4s";
const PREFIX = "";
const fs = require("fs");

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync("./commands/").filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("STATUS: ONLINE");
  client.user.setActivity("Matrix", { type: "WATCHING" });
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
      message.channel.send("Yooo whats up!").then(message.react("🪂"));
      break;
  }
  switch (args[0]) {
    case "!help":
      message.channel
        .send(
          "The BOT responds to the following words: 'Flomaster',\
          'flomaster',\
          'Quality',\
          'quality',\
          'mark',\
          'Mark',\
          'stfu',\
          'mark?',\
          'hi',\
          'hey',\
          'yo',\
          'Yo',\
          'Hey',\
          'Hi',\
          'hello',\
          'Hello',\
          'hacker'"
        )
        .then(message.react("ℹ️"));
      break;
  }

  switch (args[0]) {
    case "mark?":
    case "Mark":
    case "mark":
      message.channel.send("Yes?");
      break;
  }
  switch (args[0]) {
    case "stfu":
      message.channel.send("What did you say to me?!").then(message.react("😡"));
      message.react("😤");
      message.react("😠");
      message.react("👺");
      message.react("🗯️");
      break;
  }

  switch (args[0]) {
    case "quality":
      message.channel
        .send("https://media.giphy.com/media/10zxDv7Hv5RF9C/giphy.gif")
        .then(message.react("🐻‍❄️"));
      break;
  }
  switch (args[0]) {
    case "Quality":
      message.channel
        .send("https://media.giphy.com/media/MC6eSuC3yypCU/giphy.gif")
        .then(message.react("🦩"));
      break;
  }
  switch (args[0]) {
    case "flomaster":
      message.channel
        .send("https://media.giphy.com/media/QsggDWcGSb4gg4PJDq/giphy.gif")
        .then(message.react("🐻‍❄️"));
      break;
  }
  switch (args[0]) {
    case "Flomaster":
      message.channel
        .send("https://media.giphy.com/media/fV0oSDsZ4UgdW/giphy.gif")
        .then(message.react("🪐"));
      break;
  }
  switch (args[0]) {
    case "hacker":
      message.channel
        .send("https://media.giphy.com/media/sULKEgDMX8LcI/giphy.gif")
        .then(message.react("🪐"));
      break;
  }
});

client.login(process.env.token);

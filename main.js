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
});

//--- GETS THE COMMANDS FROM A FOLDER CALLED COMMANDS ---//
// client.on("message", (message) => {
//   if (!message.content.startsWith("yo")) return;
//   let args = message.content.substring(PREFIX.length).split(" ");
//   switch (args[0]) {
//     case "yo":
//       client.commands.get("yo").execute(message, args);
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
    case "mark?":
    case "Mark":
    case "mark":
      message.channel.send("Yes?");
      break;
  }

  switch (args[0]) {
    case "quality":
      message.channel
        .send(
          "Quality is the best developer alive!https://media.giphy.com/media/hrRJ41JB2zlgZiYcCw/giphy.gif"
        )
        .then(message.react("🦩"));
      break;
  }
  switch (args[0]) {
    case "flomaster":
      message.channel
        .send("https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif")
        .then(message.react("🪐"));
      break;
  }
});

client.login(process.env.token);

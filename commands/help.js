module.exports = {
  name: "help",
  description: "Displays a list of all commands.",
  execute(message, args) {
    message.channel.send(
      "Mark responds to the following words: Flomaster, flomaster, Quality, quality, mark, Mark, stfu, mark?, hi, hey, yo, Yo, Hey, Hi, hello, Hello, hacker"
    );
  },
};

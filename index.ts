import Discord = require('discord.js');
const bot = new Discord.Client();

// imports
import global = require("./utils/global.json");
import { load } from 'ts-dotenv';
const env = load({
    token: String,
});

// exp.ts
import { save, cmd } from "./exp";
const s = new save;
const c = new cmd;

// commands
var commands = new Discord.Collection();
var aliases = new Discord.Collection();

console.clear();
console.log("Loading and logging in...")

bot.on('ready', () => {
    console.clear();

    var ready : string = bot.user.tag + "is ready." 
    
    console.log(ready)

    global.defaultmodules.forEach((f, i) =>{
        c.load(f);
      });

})

bot.on("message", async message => {
    //a little bit of data parsing/general checks
  
    if (message.content.indexOf(global.prefix) !== 0) return;
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return; // ? comment out if you want to enable commands in DMs.
    
    let content = message.content.toLowerCase().split(" ");
    let command = content[0];
    let args = content.slice(1);
    let prefix = global.prefix;
  
    if (!commands.get(command.slice(prefix.length)) && !aliases.get(command.slice(prefix.length))) {
     /* message.channel.send(exp.buildembed('Command not found', 
     "Sorry, this command either does not exist or wasn't loaded.", 
     global.prefix + 'help for help',
     true)); */
    }
  
    const commandfile = commands.get(command.slice(prefix.length)) || commands.get(aliases.get(command.slice(prefix.length)));
    console.log(commandfile)
    //if(commandfile) commandfile.run(bot,message,args);
  })

  exports.loadCommand = function(a, b){commands.set(a, b)} // for adding commands to the bot
  exports.loadAlias = function(c, d){aliases.set(c, d)} // for adding aliases to the bot
  exports.reload = function(arg, module) {
    console.clear();
    commands = new Discord.Collection();
    aliases = new Discord.Collection();
    console.log("Bot was reloaded.");
    console.log("------------");
  
    switch (arg) {
      case '--module':
      case '-m': 
      c.load("default");
      c.load(module);
      break;
  
      case '--nothing':
      case '-n':
      break;
  
      case '--only':
      case '-o':
      c.load(module);
      break;
  
      default:
        c.load("default");
      break;
    }
}

bot.login(env.token)
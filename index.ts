import Discord = require('discord.js');
const bot = new Discord.Client();

// imports
import { load } from 'ts-dotenv';
const env = load({
    token: String,
});

// exp.ts
import { save } from "./exp";
const s = new save;

console.clear();
console.log("Loading and logging in...")

bot.on('ready', () => {
    console.clear();

    var ready : string = bot.user.tag + "is ready." 
    
    console.log(ready)

})

bot.login(env.token)
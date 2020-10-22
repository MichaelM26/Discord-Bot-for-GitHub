const Discord = require('discord.js');
 const client = new Discord.Client();
 // My targeted user was called Jess hence the Jessica copy pasta
 // I called it JuserID rather than just userID incase i want to add other messages for specific users
 const JuserID = "TARGETED-USER-ID"

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

// These 2 functions will cause the bot to sleep for 2 seconds when sleepCall() is called
// Had a spam problem with the bot and i couldn't figure out why so just added a sleep to stop it
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve('resolved');
        }, 2000);
    });
}

async function sleepCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
}

client.on("message", function(message){
    // This will react to every user but the targeted one
    if(message.author.id !== JuserID) {
        client.on('message', msg => {
            if (msg.content === 'ggs') {
                msg.react('🛑');
                sleepCall();
            }
        });
    }

    // This will react to only the targeted user
    if(message.author.id === JuserID) {
        client.on('message', msg => {
            if (msg.content === 'ggs') {
                msg.reply('apple 🍎🍏 bottom jeans 👖✨ bOots w the fUrR 👢goT the whole club 💃🕺 lookiNgh 👀👀 at hEur 💅💆‍♀️ shE hit the- 😳 JESSICA 😡🤬 dID U sLEPP 👌 WITH UR GODDAMN TEACHER 😱👨‍🏫 wHat-😳🤭 U slEep 😴💤 WITH UR TEACHER 🚫⁉️ -mr. wilson?😍😫 MISTER WILSON 🙅‍♀️👌 NO I DIDNT 🙀 YES YOU DID 🤬');
                sleepCall();
            }
        });
    }
});

// enter your bots token here from the discord site
client.login('BOT-TOKEN');    
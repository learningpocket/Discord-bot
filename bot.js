const discord = require('discord.js');
const fetch = require("node-fetch");
const client = new discord.Client();

client.on("ready", () => {
    console.log("Bot is ready to use");
});

client.on("message", async (msg) => {
    try {
        let query = msg.content.split(" ");
        if (query[0] == ".gif") {
            let url = `https://g.tenor.com/v1/search?q=${query[1]}&key=PWNEEIO75D8I`;
            let response = await fetch(url);
            let data = await response.json();
            let random = Math.floor(Math.random() * data.results.length);
            msg.channel.send(data.results[random].url);
        }
    }catch(err){
        console.log(err);
    }
    
});


try {
    client.login('ODY1OTQzNTMyMDMxNTc0MDE3.YPLWwg.WaAH3oU3X_mXigcEoeHrsZi6f8s');
} catch (error) {
    console.log(`Error due to login`);
}